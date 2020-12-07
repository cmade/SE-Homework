const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'white'];
const container = document.querySelector('.container');
const children = document.querySelectorAll('.child');

container.addEventListener('click', (e) => {
  if (e.target) {
    for (i = 0; i < children.length; i++) {
      children.item(i).style.background = colors[Math.floor(Math.random() * ((colors.length -1) - 0) + 0)];
    }
  }
})