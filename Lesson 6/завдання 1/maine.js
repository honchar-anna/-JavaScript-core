const box = document.querySelector('.box');
let cursor = 0;
const colors = ['#f72500', '#fefd00', '#1b7e00'];

box.onmouseover = function() {
  box.style.backgroundColor = colors[cursor++];
  cursor %= colors.length;
};

box.onmouseout = function() {
  box.style.backgroundColor = '';
};