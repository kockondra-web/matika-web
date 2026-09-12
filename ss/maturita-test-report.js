(() => {
  const submit = document.getElementById('test-submit');
  if (!submit) return;
  submit.addEventListener('click', () => {
    const tasks = [...document.querySelectorAll('.task')];
    const wrongTopics = [...new Set(tasks.filter(task => task.classList.contains('wrong')).map(task => task.querySelector('.topic')?.textContent.trim()).filter(Boolean))];
    const correct = tasks.filter(task => task.classList.contains('correct')).length;
    const report = {
      test: location.pathname.includes('test-2') ? 2 : 1,
      correct,
      topics: wrongTopics.slice(0, 5),
      savedAt: Date.now()
    };
    try { localStorage.setItem('maturita-posledni-vysledek', JSON.stringify(report)); } catch (_) {}
  });
})();
