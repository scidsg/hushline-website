function checkStatus() {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = 'https://tips.hushline.app/static/img/icon-search.png?t=' + Date.now();
  });
}

checkStatus().then(isUp => {
  const el = document.getElementById('uptime-badge');
  el.classList.remove('hidden');
  el.innerHTML = isUp
    ? '<span class="status-icon">🟢</span> Systems online'
    : '<span class="status-icon">🔴</span> Systems may be down';
});
