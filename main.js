var $carR = document.querySelector('.right');
var intervalId = setInterval(move, 16);
var left = 0;
var space = 0;
var upside = 0;

function move() {
  if ($carR.className === 'right') {
    left += 16;
    $carR.style.left = left + 'px';
  }

  if ($carR.className === 'left') {
    left -= 16;
    $carR.style.left = left + 'px';
  }

  if ($carR.className === 'top') {
    upside -= 16;
    $carR.style.top = upside + 'px';
  }

  if ($carR.className === 'bottom') {
    upside += 16;
    $carR.style.top = upside + 'px';
  }
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    $carR.className = 'right';
  }
  if (event.key === 'ArrowLeft') {
    $carR.className = 'left';
  }
  if (event.key === 'ArrowUp') {
    $carR.className = 'top';
  }
  if (event.key === 'ArrowDown') {
    $carR.className = 'bottom';
  }
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
