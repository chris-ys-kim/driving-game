var $carR = document.querySelector('.right');
var intervalId = setInterval(move, 16);
var left = 0;
var space = 0;

function move() {
  left += 16;
  $carR.style.left = left + 'px';
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') { $carR.className = 'right'; }
  if (event.key === 'ArrowLeft') { $carR.className = 'left'; }
  if (event.key === 'ArrowUp') { $carR.className = 'top'; }
  if (event.key === 'ArrowDown') { $carR.className = 'bottom'; }
  if (event.key === ' ') {
    space++;
    if (space % 2 === 1) {
      intervalId = setInterval(move, 16);
    }
    if (space % 2 === 0) {
      clearInterval(intervalId);
    }
  }
});

clearInterval(intervalId);
