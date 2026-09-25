/* Společný záznam chyb: odměna patří až za pozdější správnou odpověď. */
(() => {
  const key = 'mj_review_v1';
  const read = () => { try { const value = JSON.parse(localStorage.getItem(key) || '{}'); return value && typeof value === 'object' ? value : {}; } catch (_) { return {}; } };
  const write = value => { try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) {} };
  const get = id => read()[id] || null;
  const wrong = data => {
    if (!data || !data.id) return;
    const all = read(), old = all[data.id];
    if (old?.fixedAt) return;
    all[data.id] = { ...old, ...data, id: data.id, firstWrongAt: old?.firstWrongAt || Date.now(), lastWrongAt: Date.now(), status: 'open' };
    write(all);
  };
  const correct = (data, eligible = true) => {
    if (!data || !data.id) return 0;
    const all = read(), old = all[data.id];
    if (!old || old.fixedAt || !eligible) return 0;
    all[data.id] = { ...old, status: 'fixed', fixedAt: Date.now() };
    write(all);
    const xpKey = data.track === 'intake' ? 'mj_progress_v1' : 'maturita-xp';
    try {
      if (data.track === 'intake') {
        const progress = JSON.parse(localStorage.getItem(xpKey) || '{}');
        progress.xp = Number(progress.xp || 0) + 5;
        localStorage.setItem(xpKey, JSON.stringify(progress));
      } else localStorage.setItem(xpKey, String(Number(localStorage.getItem(xpKey) || 0) + 5));
    } catch (_) {}
    return 5;
  };
  const reviewed = id => {
    const all = read(), old = all[id];
    if (!old || old.status !== 'open') return;
    all[id] = { ...old, status: 'reviewed', reviewedAt: Date.now() };
    write(all);
  };
  window.MJReview = { read, get, wrong, correct, reviewed };
})();
