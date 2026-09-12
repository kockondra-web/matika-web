(() => {
  const tasks = [...document.querySelectorAll('.task')];
  if (!tasks.length) return;
  const key = `maturita-rozepsany-test:${location.pathname.split('/').pop()}`;
  const inputs = [...document.querySelectorAll('.task input')];
  const read = () => Object.fromEntries(inputs.map(input => [input.name + (input.type === 'radio' ? `:${input.value}` : ''), input.type === 'radio' ? input.checked : input.value]));
  const save = () => {
    try { localStorage.setItem(key, JSON.stringify(read())); } catch (_) {}
  };
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '{}');
    inputs.forEach(input => {
      const id = input.name + (input.type === 'radio' ? `:${input.value}` : '');
      if (!(id in saved)) return;
      if (input.type === 'radio') input.checked = Boolean(saved[id]);
      else input.value = saved[id];
    });
  } catch (_) {}
  inputs.forEach(input => {
    input.addEventListener('input', save);
    input.addEventListener('change', save);
  });
  const finish = document.querySelector('.finish');
  const clear = document.createElement('button');
  clear.type = 'button';
  clear.className = 'submit test-clear-answers';
  clear.textContent = 'Vymazat odpovědi a začít znovu';
  clear.style.marginLeft = '8px';
  clear.style.background = 'rgba(255,255,255,.14)';
  clear.style.color = 'white';
  finish?.append(clear);
  clear.addEventListener('click', () => {
    inputs.forEach(input => {
      if (input.type === 'radio') input.checked = false;
      else input.value = '';
    });
    tasks.forEach(task => task.classList.remove('correct', 'wrong'));
    document.body.classList.remove('submitted');
    const result = document.getElementById('test-result');
    result?.classList.remove('show');
    try { localStorage.removeItem(key); } catch (_) {}
    document.getElementById('test-progress').textContent = `0 z ${tasks.length} vyplněno`;
    scrollTo({ top: 0, behavior: 'smooth' });
  });
  const answered = tasks.filter((task, index) => {
    const name = `q${index + 1}`;
    return Boolean(document.querySelector(`input[name="${name}"]:checked`) || document.querySelector(`input[name="${name}"]:not([type="radio"])`)?.value);
  }).length;
  const progress = document.getElementById('test-progress');
  if (progress) progress.textContent = `${answered} z ${tasks.length} vyplněno`;
})();
