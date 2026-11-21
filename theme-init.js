// Runs before the first paint so the page never flashes the wrong theme.
(function () {
  try {
    var t = localStorage.getItem('ns-theme');
    document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : 'dark');
  } catch (e) { document.documentElement.setAttribute('data-theme', 'dark'); }
})();
