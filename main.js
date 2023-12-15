const canvas = document.getElementById('myCanvas');
canvas.width = 200;

// context that cointains all the methods to draw things
const ctx = canvas.getContext("2d");
const car = new  Car(100, 100, 30, 50);
car.draw(ctx);

animate();

function animate(){
  car.update();

  canvas.height = window.innerHeight;
  car.draw(ctx);
  // this function calls the animate method over and ver many times per second, giving the ilusion of movement
  requestAnimationFrame(animate)
}