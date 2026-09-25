(function () {
  'use strict';

  const config = window.JPZ_EXAM_CONFIG;
  if (!config || !config.tasks) return;

  const storageKey = `mj_exam_${config.id}_v1`;
  const historyKey = 'mj_exam_history_v1';
  const progressKey = 'mj_progress_v1';
  const panel = document.getElementById('exam-panel');
  const resultBox = document.getElementById('exam-result');
  const startButton = document.getElementById('exam-start');
  const submitButton = document.getElementById('exam-submit');
  const resetButton = document.getElementById('exam-reset');
  const statusValue = document.getElementById('exam-status-value');
  const timer = document.getElementById('exam-timer');
  const progress = document.getElementById('exam-progress');
  const cards = new Map();
  let timerHandle = null;

  const freshState = () => ({
    status: 'idle',
    startedAt: null,
    submittedAt: null,
    answers: {},
    manualScores: {}
  });

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (!saved || !['idle', 'running', 'submitted'].includes(saved.status)) return freshState();
      return Object.assign(freshState(), saved, {
        answers: saved.answers || {},
        manualScores: saved.manualScores || {}
      });
    } catch (error) {
      return freshState();
    }
  }

  let state = loadState();

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function pointWord(value) {
    return value === 1 ? 'bod' : value >= 2 && value <= 4 ? 'body' : 'bodů';
  }

  function confirmAction(message, confirmLabel) {
    if (typeof HTMLDialogElement === 'undefined') return Promise.resolve(window.confirm(message));
    return new Promise(resolve => {
      const dialog = document.createElement('dialog');
      dialog.className = 'exam-confirm-dialog';
      const heading = document.createElement('h2');
      heading.textContent = 'Potvrdit akci';
      const description = document.createElement('p');
      description.textContent = message;
      const actions = document.createElement('div');
      actions.className = 'exam-confirm-actions';
      const cancel = document.createElement('button');
      cancel.type = 'button';
      cancel.textContent = 'Vrátit se k testu';
      const confirm = document.createElement('button');
      confirm.type = 'button';
      confirm.className = 'exam-confirm-primary';
      confirm.textContent = confirmLabel;
      actions.append(cancel, confirm);
      dialog.append(heading, description, actions);
      document.body.append(dialog);
      const finish = accepted => {
        dialog.close();
        dialog.remove();
        resolve(accepted);
      };
      cancel.addEventListener('click', () => finish(false));
      confirm.addEventListener('click', () => finish(true));
      dialog.addEventListener('cancel', event => {
        event.preventDefault();
        finish(false);
      });
      dialog.showModal();
    });
  }

  function normalize(value) {
    return String(value || '')
      .trim()
      .toLocaleLowerCase('cs')
      .replace(/[−–—]/g, '-')
      .replace(/,/g, '.')
      .replace(/·/g, '*')
      .replace(/²/g, '^2')
      .replace(/\s+/g, '')
      .replace(/^(?:výsledek|x|y|a|b|c)=/i, '');
  }

  function tokenizeExpression(value) {
    const expression = normalize(value);
    if (!expression || !/[0-9()+\-*/^]/.test(expression) || !/^[0-9a-z.+\-*/^()]+$/.test(expression)) return null;
    const tokens = expression.match(/\d+(?:\.\d+)?|[a-z]|[()+\-*/^]/g);
    return tokens && tokens.join('') === expression ? tokens : null;
  }

  function evaluateExpression(value, variables) {
    const tokens = tokenizeExpression(value);
    if (!tokens) return null;
    let position = 0;
    const startsPrimary = token => token === '(' || /^[0-9a-z]/.test(token || '');

    function primary() {
      const token = tokens[position++];
      if (token === '(') {
        const result = expression();
        if (tokens[position++] !== ')') throw new Error('Závorka');
        return result;
      }
      if (/^\d/.test(token || '')) return Number(token);
      if (/^[a-z]$/.test(token || '')) return variables[token] ?? 2;
      throw new Error('Výraz');
    }

    function unary() {
      if (tokens[position] === '+') { position += 1; return unary(); }
      if (tokens[position] === '-') { position += 1; return -unary(); }
      return primary();
    }

    function power() {
      let result = unary();
      if (tokens[position] === '^') {
        position += 1;
        result = Math.pow(result, power());
      }
      return result;
    }

    function term() {
      let result = power();
      while (tokens[position] === '*' || tokens[position] === '/' || startsPrimary(tokens[position])) {
        const operator = tokens[position] === '*' || tokens[position] === '/' ? tokens[position++] : '*';
        const right = power();
        result = operator === '*' ? result * right : result / right;
      }
      return result;
    }

    function expression() {
      let result = term();
      while (tokens[position] === '+' || tokens[position] === '-') {
        const operator = tokens[position++];
        const right = term();
        result = operator === '+' ? result + right : result - right;
      }
      return result;
    }

    try {
      const result = expression();
      return position === tokens.length && Number.isFinite(result) ? result : null;
    } catch (error) {
      return null;
    }
  }

  function expressionsMatch(first, second) {
    const environments = [
      { x: 2, y: 3, a: 5, b: 7, n: 11, r: 13 },
      { x: -3, y: 5, a: 2, b: -4, n: 7, r: 9 },
      { x: 0.5, y: -2, a: 8, b: 3, n: -5, r: 6 }
    ];
    return environments.every(variables => {
      const left = evaluateExpression(first, variables);
      const right = evaluateExpression(second, variables);
      if (left === null || right === null) return false;
      return Math.abs(left - right) <= 1e-8 * Math.max(1, Math.abs(left), Math.abs(right));
    });
  }

  function isCorrect(value, accepted) {
    const candidate = normalize(value);
    return candidate !== '' && accepted.some(answer => {
      const expected = normalize(answer);
      return expected === candidate || expressionsMatch(candidate, expected);
    });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    })[char]);
  }

  function buildField(taskId, field, index) {
    const label = document.createElement('label');
    label.className = `exam-field${field.wide ? ' exam-field-wide' : ''}`;
    const labelText = document.createElement('span');
    labelText.textContent = field.label || 'Výsledek';
    label.appendChild(labelText);

    let control;
    if (field.type === 'select') {
      control = document.createElement('select');
      (field.options || []).forEach(option => {
        const element = document.createElement('option');
        element.value = option;
        element.textContent = option || 'Vyberte…';
        control.appendChild(element);
      });
    } else {
      control = document.createElement('input');
      control.type = 'text';
      control.inputMode = field.inputMode || 'text';
      control.autocomplete = 'off';
      control.placeholder = field.placeholder || 'Napište odpověď';
    }

    control.dataset.taskId = taskId;
    control.dataset.fieldIndex = String(index);
    control.value = state.answers[taskId]?.[index] || '';
    control.addEventListener('input', storeAnswer);
    control.addEventListener('change', storeAnswer);
    label.appendChild(control);

    const feedback = document.createElement('span');
    feedback.className = 'exam-field-result';
    feedback.setAttribute('aria-live', 'polite');
    label.appendChild(feedback);
    return label;
  }

  function buildManualArea(taskId, task) {
    const fields = document.createElement('div');
    fields.className = 'exam-fields';
    const label = document.createElement('label');
    label.className = 'exam-field exam-field-wide';
    label.innerHTML = '<span>Poznámky ke konstrukci (volitelné)</span>';
    const notes = document.createElement('textarea');
    notes.placeholder = 'Můžete si poznamenat postup nebo výsledek konstrukce.';
    notes.dataset.taskId = taskId;
    notes.dataset.fieldIndex = '0';
    notes.value = state.answers[taskId]?.[0] || '';
    notes.addEventListener('input', storeAnswer);
    label.appendChild(notes);
    fields.appendChild(label);

    const scorer = document.createElement('div');
    scorer.className = 'manual-score';
    scorer.innerHTML = `<p><strong>Porovnejte svůj nákres s postupem výše.</strong><br>${escapeHtml(task.rubric)}</p>`;
    const scoreLabel = document.createElement('label');
    scoreLabel.textContent = 'Přidělené body: ';
    const select = document.createElement('select');
    select.dataset.manualTask = taskId;
    const pending = document.createElement('option');
    pending.value = '';
    pending.textContent = 'Vyberte…';
    select.appendChild(pending);
    for (let score = 0; score <= task.max; score += 1) {
      const option = document.createElement('option');
      option.value = String(score);
      option.textContent = `${score} ${pointWord(score)}`;
      select.appendChild(option);
    }
    if (Object.prototype.hasOwnProperty.call(state.manualScores, taskId)) {
      select.value = String(state.manualScores[taskId]);
    }
    select.addEventListener('change', () => {
      if (select.value === '') delete state.manualScores[taskId];
      else state.manualScores[taskId] = Number(select.value);
      saveState();
      evaluateAndRender();
    });
    scoreLabel.appendChild(select);
    scorer.appendChild(scoreLabel);
    return { fields, scorer };
  }

  function prepareCards() {
    document.querySelectorAll('.pure-example').forEach(card => {
      const taskId = card.querySelector('.task-num-badge')?.textContent.trim();
      const task = config.tasks[taskId];
      if (!task) return;
      cards.set(taskId, card);
      card.dataset.taskId = taskId;
      const points = card.querySelector('.points-tag');
      if (points) points.textContent = task.max === 1 ? '1 bod' : `max. ${task.max} ${pointWord(task.max)}`;

      const area = document.createElement('div');
      area.className = 'exam-answer-area';
      area.innerHTML = '<div class="exam-answer-title">Vaše odpověď</div>';

      if (task.manual) {
        const manual = buildManualArea(taskId, task);
        area.appendChild(manual.fields);
        area.appendChild(manual.scorer);
      } else {
        const fields = document.createElement('div');
        fields.className = 'exam-fields';
        task.fields.forEach((field, index) => fields.appendChild(buildField(taskId, field, index)));
        area.appendChild(fields);
      }
      card.querySelector('.pe-q')?.insertAdjacentElement('afterend', area);
    });
  }

  function storeAnswer(event) {
    const control = event.currentTarget;
    const taskId = control.dataset.taskId;
    const index = Number(control.dataset.fieldIndex);
    if (!state.answers[taskId]) state.answers[taskId] = [];
    state.answers[taskId][index] = control.value;
    saveState();
    updateProgress();
  }

  function answeredTaskCount() {
    let count = 0;
    cards.forEach((card, taskId) => {
      const values = state.answers[taskId] || [];
      if (values.some(value => String(value || '').trim() !== '')) count += 1;
    });
    return count;
  }

  function unansweredTaskCount() {
    return Math.max(0, cards.size - answeredTaskCount());
  }

  function updateProgress() {
    progress.textContent = `Vyplněno ${answeredTaskCount()} z ${cards.size} odpovědí`;
  }

  function remainingSeconds() {
    if (!state.startedAt) return config.durationMinutes * 60;
    return Math.max(0, config.durationMinutes * 60 - Math.floor((Date.now() - state.startedAt) / 1000));
  }

  function updateTimer() {
    const remaining = state.status === 'submitted'
      ? Math.max(0, config.durationMinutes * 60 - Math.floor(((state.submittedAt || Date.now()) - state.startedAt) / 1000))
      : remainingSeconds();
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timer.classList.toggle('warning', state.status === 'running' && remaining <= 5 * 60);
    if (state.status === 'running' && remaining === 0) submitExam(true);
  }

  function setControlsEnabled(enabled) {
    document.querySelectorAll('.exam-answer-area input, .exam-answer-area select:not([data-manual-task]), .exam-answer-area textarea')
      .forEach(control => { control.disabled = !enabled; });
  }

  function startExam() {
    state.status = 'running';
    state.startedAt = Date.now();
    state.submittedAt = null;
    saveState();
    renderState();
    const first = document.querySelector('.exam-answer-area input, .exam-answer-area select, .exam-answer-area textarea');
    first?.focus({ preventScroll: true });
  }

  async function submitExam(automatic) {
    if (state.status !== 'running') return;
    if (!automatic) {
      const unanswered = unansweredTaskCount();
      const message = unanswered
        ? `Nemáte vyplněno ${unanswered} ${unanswered === 1 ? 'úlohu' : unanswered >= 2 && unanswered <= 4 ? 'úlohy' : 'úloh'}. Opravdu chcete test odevzdat?`
        : 'Opravdu chcete test odevzdat? Po odevzdání už odpovědi nepůjdou změnit.';
      if (!await confirmAction(message, 'Odevzdat test')) return;
    }
    if (state.status !== 'running') return;
    document.querySelectorAll('.exam-answer-area input, .exam-answer-area select:not([data-manual-task]), .exam-answer-area textarea')
      .forEach(control => {
        const taskId = control.dataset.taskId;
        const index = Number(control.dataset.fieldIndex);
        if (!state.answers[taskId]) state.answers[taskId] = [];
        state.answers[taskId][index] = control.value;
      });
    state.status = 'submitted';
    state.submittedAt = Date.now();
    state.automaticSubmission = Boolean(automatic);
    saveState();
    renderState();
    window.scrollTo({
      top: Math.max(0, panel.offsetTop - 90),
      behavior: 'smooth'
    });
  }

  function evaluateTask(taskId, task, card) {
    card.classList.remove('exam-correct', 'exam-wrong', 'exam-blank', 'exam-pending');
    let score = 0;
    let classification = 'blank';

    if (task.manual) {
      const hasScore = Object.prototype.hasOwnProperty.call(state.manualScores, taskId);
      if (!hasScore) {
        classification = 'pending';
      } else {
        score = Number(state.manualScores[taskId]);
        classification = score === task.max ? 'correct' : score === 0 ? 'wrong' : 'pending';
      }
    } else {
      const values = state.answers[taskId] || [];
      let filled = 0;
      task.fields.forEach((field, index) => {
        const value = values[index] || '';
        const correct = isCorrect(value, field.answers || []);
        if (String(value).trim() !== '') filled += 1;
        if (correct) score += field.points;
        const feedback = card.querySelectorAll('.exam-field-result')[index];
        if (feedback) {
          feedback.className = `exam-field-result ${String(value).trim() === '' ? 'blank' : correct ? 'correct' : 'wrong'}`;
          feedback.textContent = String(value).trim() === '' ? 'Bez odpovědi' : correct ? `Správně · +${field.points}` : 'Nesprávně';
        }
      });
      classification = filled === 0 ? 'blank' : score === task.max ? 'correct' : 'wrong';
    }

    card.classList.add(`exam-${classification}`);
    let scoreTag = card.querySelector('.task-score');
    if (!scoreTag) {
      scoreTag = document.createElement('div');
      scoreTag.className = 'task-score';
      card.querySelector('.points-tag')?.insertAdjacentElement('afterend', scoreTag);
    }
    scoreTag.textContent = task.manual && classification === 'pending' && !Object.prototype.hasOwnProperty.call(state.manualScores, taskId)
      ? `čeká na hodnocení / ${task.max}`
      : `${score} / ${task.max}`;
    return { score, classification };
  }

  function topicForCard(card) {
    const hash = card.querySelector('.topic-tag')?.getAttribute('href')?.split('#')[1];
    if (hash) return hash;
    const label = card.querySelector('.topic-tag')?.textContent.trim() || '';
    const normalizedLabel = label.toLocaleLowerCase('cs');
    const routes = [
      ['zlom', 'zlomky'], ['jednot', 'prevody'], ['výraz', 'mocniny'], ['výpočet', 'mocniny'],
      ['rovnic', 'rovnice'], ['soustav', 'rovnice'], ['procent', 'procenta'], ['finan', 'procenta'],
      ['konstruk', 'konstrukcni-ulohy'], ['geometr', 'geometrie'], ['planimetr', 'geometrie'],
      ['těles', 'objemy'], ['hranol', 'objemy'], ['graf', 'ano-ne'], ['ano/ne', 'ano-ne'],
      ['obraz', 'logicka-uloha'], ['logick', 'logicka-uloha'], ['slovní', 'slovni-ulohy'],
      ['poměr', 'slovni-ulohy-pomer-umernost']
    ];
    return routes.find(([part]) => normalizedLabel.includes(part))?.[1] || 'slovni-ulohy';
  }

  function loadJson(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch (error) { return fallback; }
  }

  function persistAttempt(total, stats, pending, details) {
    const history = loadJson(historyKey, { attempts: [] });
    if (!Array.isArray(history.attempts)) history.attempts = [];
    const attemptKey = `${config.id}-${state.startedAt}`;
    const summary = {
      key: attemptKey,
      testId: config.id,
      title: config.title || `Test ${config.id.slice(-1).toUpperCase()}`,
      startedAt: state.startedAt,
      submittedAt: state.submittedAt,
      timeUsedSeconds: Math.min(config.durationMinutes * 60, Math.max(0, Math.round((state.submittedAt - state.startedAt) / 1000))),
      score: total,
      max: config.totalPoints,
      pendingManual: pending,
      automaticSubmission: Boolean(state.automaticSubmission),
      stats,
      details
    };
    const existing = history.attempts.findIndex(attempt => attempt.key === attemptKey);
    if (existing >= 0) history.attempts[existing] = summary;
    else history.attempts.push(summary);
    history.attempts = history.attempts
      .sort((a, b) => b.submittedAt - a.submittedAt)
      .filter((attempt, index, all) => all.slice(0, index).filter(item => item.testId === attempt.testId).length < 20);
    localStorage.setItem(historyKey, JSON.stringify(history));

    const progressState = loadJson(progressKey, { xp: 0, done: {}, topicDone: {}, errors: [], lastVisit: null, streak: 0 });
    if (!Array.isArray(progressState.errors)) progressState.errors = [];
    progressState.errors = progressState.errors.filter(error => error.sourceAttempt !== attemptKey);
    details.filter(detail => detail.classification === 'wrong' || detail.classification === 'blank').forEach(detail => {
      progressState.errors.push({
        id: `test-${config.id}-${detail.taskId}`,
        topic: detail.topicId,
        question: `${summary.title}, úloha ${detail.taskId}`,
        reason: detail.classification === 'blank' ? 'cas' : 'postup',
        at: state.submittedAt,
        sourceAttempt: attemptKey
      });
    });
    localStorage.setItem(progressKey, JSON.stringify(progressState));
    let correctedXp = 0;
    details.forEach(detail => {
      const card = cards.get(detail.taskId);
      if (card) card.id = `test-uloha-${detail.taskId}`;
      const review = { id: `intake-test:${config.id}:${detail.taskId}`, track: 'intake', source: 'Celý test', title: summary.title, question: card?.querySelector('.pe-q')?.textContent.trim() || `Úloha ${detail.taskId}`, href: `zs/${location.pathname.split('/').pop()}#test-uloha-${detail.taskId}` };
      if (detail.classification === 'wrong' || detail.classification === 'blank') window.MJReview?.wrong(review);
      else if (detail.classification === 'correct') correctedXp += window.MJReview?.correct(review) || 0;
    });
    if (correctedXp) {
      const note = document.createElement('p');
      note.className = 'exam-result-note';
      note.textContent = `Navíc ${correctedXp} XP za opravené dřívější chyby.`;
      resultBox.append(note);
    }
  }

  function formatUsedTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const rest = seconds % 60;
    return `${minutes}:${String(rest).padStart(2, '0')}`;
  }

  function resultMessage(percent, pending) {
    if (pending) return 'Výsledek ještě není konečný. U konstrukčních úloh si podle zobrazeného postupu přidělte body.';
    if (percent >= 84) return 'Výborný výsledek. Úroveň odpovídá velmi jistému zvládnutí přijímačkového testu.';
    if (percent >= 70) return 'Solidní výsledek. Zaměřte se hlavně na úlohy označené červeně.';
    if (percent >= 50) return 'Základ máte. Nejvíc pomůže projít chyby a pak si test zopakovat bez nápovědy.';
    return 'Teď se vyplatí vrátit k nejslabším tématům a potom zkusit nový pokus.';
  }

  function evaluateAndRender() {
    if (state.status !== 'submitted') return;
    let total = 0;
    const stats = { correct: 0, wrong: 0, blank: 0, pending: 0 };
    const details = [];
    cards.forEach((card, taskId) => {
      const evaluation = evaluateTask(taskId, config.tasks[taskId], card);
      total += evaluation.score;
      stats[evaluation.classification] += 1;
      details.push({
        taskId,
        score: evaluation.score,
        max: config.tasks[taskId].max,
        classification: evaluation.classification,
        topicId: topicForCard(card),
        topicLabel: card.querySelector('.topic-tag')?.textContent.trim() || 'Téma'
      });
    });
    const pending = Object.keys(config.tasks).filter(taskId => config.tasks[taskId].manual && !Object.prototype.hasOwnProperty.call(state.manualScores, taskId)).length;
    const percent = Math.round((total / config.totalPoints) * 100);
    const weakTopics = [];
    details.filter(detail => ['wrong', 'blank'].includes(detail.classification)).forEach(detail => {
      if (!weakTopics.some(topic => topic.id === detail.topicId)) weakTopics.push({ id: detail.topicId, label: detail.topicLabel });
    });
    const recommendations = weakTopics.length
      ? `<div class="exam-recommendations"><strong>Doporučené procvičení:</strong>${weakTopics.slice(0, 3).map(topic => `<a href="prijimacky.html#${encodeURIComponent(topic.id)}">${escapeHtml(topic.label)}</a>`).join('')}</div>`
      : '';
    resultBox.innerHTML = `
      <h2>Orientační výsledek testu</h2>
      <div class="exam-score">${total} / ${config.totalPoints} bodů</div>
      <p class="exam-result-copy">${resultMessage(percent, pending)}${state.automaticSubmission ? ' Čas vypršel a test se odevzdal automaticky.' : ''}</p>
      <div class="exam-result-stats">
        <span class="exam-result-stat">Čas: ${formatUsedTime(Math.min(config.durationMinutes * 60, Math.max(0, Math.round((state.submittedAt - state.startedAt) / 1000))))}</span>
        <span class="exam-result-stat correct">Správně: ${stats.correct}</span>
        <span class="exam-result-stat wrong">S chybou: ${stats.wrong}</span>
        <span class="exam-result-stat">Bez odpovědi: ${stats.blank}</span>
        ${stats.pending ? `<span class="exam-result-stat">Částečně / k doplnění: ${stats.pending}</span>` : ''}
      </div>
      ${recommendations}
      <p class="exam-result-note">Automatické body jsou orientační. Ve skutečném testu může CERMAT u některých otevřených úloh udělit dílčí body za správný postup.</p>`;
    resultBox.classList.add('visible');
    persistAttempt(total, stats, pending, details);
  }

  function renderState() {
    const running = state.status === 'running';
    const submitted = state.status === 'submitted';
    document.body.classList.toggle('exam-running', running);
    document.body.classList.toggle('exam-submitted', submitted);
    statusValue.textContent = running ? 'Probíhá' : submitted ? 'Odevzdáno' : 'Připraveno';
    startButton.hidden = state.status !== 'idle';
    submitButton.hidden = !running;
    submitButton.disabled = !running;
    resetButton.hidden = !submitted;
    setControlsEnabled(running);

    document.querySelectorAll('.manual-score').forEach(box => box.classList.toggle('visible', submitted));
    if (submitted) {
      document.querySelectorAll('.pure-example').forEach(card => card.classList.add('revealed'));
      evaluateAndRender();
    } else {
      resultBox.classList.remove('visible');
    }

    if (timerHandle) window.clearInterval(timerHandle);
    updateTimer();
    if (running) timerHandle = window.setInterval(updateTimer, 1000);
    updateProgress();
  }

  async function resetExam() {
    if (!await confirmAction('Začít nový pokus? Dosavadní odpovědi a výsledek se smažou.', 'Začít nový pokus')) return;
    localStorage.removeItem(storageKey);
    window.location.reload();
  }

  prepareCards();
  document.body.classList.add('exam-mode');
  startButton?.addEventListener('click', startExam);
  submitButton?.addEventListener('click', () => submitExam(false));
  resetButton?.addEventListener('click', resetExam);
  renderState();

  if (window.renderMathInElement) {
    window.renderMathInElement(document.body, {
      delimiters: [{ left: '\\(', right: '\\)', display: false }],
      throwOnError: false
    });
  }
}());
