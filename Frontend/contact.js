const btn = document.getElementById('toggleMapBtn');
const mapInfo = document.getElementById('mapInfo');
const themeToggle = document.getElementById('themeToggle');

btn.addEventListener('click', function() {
  if (mapInfo.classList.contains('hidden-box')) {
    mapInfo.classList.remove('hidden-box');
    btn.textContent = 'Hide Delivery Info';
  } else {
    mapInfo.classList.add('hidden-box');
    btn.textContent = 'Show Delivery Info';
  }
});

themeToggle.addEventListener('change', function() {
  const isDarkMode = themeToggle.checked;
  document.body.classList.toggle('dark-mode', isDarkMode);
  themeToggle.parentElement.querySelector('.theme-label').textContent = isDarkMode ? 'Dark' : 'Light';
});