btn = document.getElementById('btn');
output = document.getElementById('output');

btn.addEventListener('click', () => {
  output.style.opacity = 0;

  setTimeout(() => {
  output.src = 'https://picsum.photos/1200?random' + Math.floor(Math.random() * 100);
  output.style.opacity = 1;
  }, 300);
});
