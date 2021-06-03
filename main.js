var $car = document.querySelector('.right');

window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') { $car.className = 'right'; }
  if (event.key === 'ArrowLeft') { $car.className = 'left'; }
  if (event.key === 'ArrowUp') { $car.className = 'top'; }
  if (event.key === 'ArrowDown') { $car.className = 'bottom'; }

});
