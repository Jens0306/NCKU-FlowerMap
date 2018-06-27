var flower;//iniiail

// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;
// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

const colors = ['#858DFF', '#8CAAFF', '#ECF8FF', '#C7ABD9'];

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

// Utility Functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
};

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
};


// Objects
function Petal() {

  this.reset = () => {

    this.parent = this;
    this.x_pos     = randomIntFromRange(0, canvas.width);
    this.y_pos     = randomIntFromRange(-700, 0);
    this.scale     = randomIntFromRange(0, 1);
    this.direction = {x:randomIntFromRange(1, 360), y:randomIntFromRange(1, 360), z:randomIntFromRange(1, 360)};
    this.rotate    = {x:randomIntFromRange(1, 10), y:randomIntFromRange(1, 10), z:randomIntFromRange(1, 10)};
    this.wind      = randomIntFromRange(1, 5);
    this.gr        = 5;
    this.phase     = 0;
  };
  this.reset();

  this.update = () => {
    var move_y;
    if(this.phase === 0){
        var ground = 1 + (this.scale/10);
        if(this.y_pos > canvas.height * ground){
            this.gr = 0;
            this.wind = 0;
            this.rotate.x = 0;
            this.rotate.y = 0;
            this.rotate.z = 0;
            this.phase = 1;
            //this.parent.fallenSakura++;
        }
    }else if(this.phase === 2){
        if(this.gr > -3 ) this.gr += this.gr/10;
        move_y = (this.gr*this.scale);
    }

    this.y_pos = this.y_pos + (this.gr*this.scale)/2;
    this.x_pos = this.x_pos + this.wind/2;
    this.direction.x += this.rotate.x/2;
    this.direction.y += this.rotate.y/2;
    this.direction.z += this.rotate.z/2;

    if (this.y_pos > canvas.height || this.x_pos > canvas.width) {
      //console.log('shit');
      this.reset();
    }
    else
      this.draw();



  };

  this.draw = () => {
    c.save();
    c.beginPath();
    c.translate(this.x_pos, this.y_pos);

    c.rotate(this.direction.y / 100 * Math.PI);
    c.scale(this.scale, this.scale);

    var grad = c.createRadialGradient(0, 0, 0, 0, 0, 10);
      //color of petals
      switch (flower) {
        case 'one':
          grad.addColorStop(0, '#fbe0ef');   //in
          grad.addColorStop(0.1, '#f8c1d5'); //middle
          grad.addColorStop(1, '#f3d3e2');   //out
          break;
        case 'two':
          grad.addColorStop(0, '#AD0B00');   //in
          grad.addColorStop(0.1, '#C20100'); //middle
          grad.addColorStop(1, '#C20100');   //out
          break;
        case 'three':
          grad.addColorStop(0, '#E8D54A');   //in
          grad.addColorStop(0.1, '#FFDB5E'); //middle
          grad.addColorStop(1, '#FFFB51');   //out
          break;
        case 'four':
          grad.addColorStop(0, '#FFE068');   //in
          grad.addColorStop(0.1, '#FFD536'); //middle
          grad.addColorStop(1, '#FFCB04');   //out
          break;
        case 'five':
          grad.addColorStop(0, '#F79D12');   //in
          grad.addColorStop(0.1, '#FF7700'); //middle
          grad.addColorStop(1, '#EA4805');   //out
          break;
        case 'six':
          grad.addColorStop(0, '#A57555');   //in
          grad.addColorStop(0.1, '#F0AA8D'); //middle
          grad.addColorStop(1, '#F08C70');   //out
          break;
      }

    c.fillStyle = grad;

    var x_rad = Math.cos(this.direction.x*Math.PI/100);
    var z_rad = Math.cos(this.direction.z*Math.PI/100);
    c.moveTo(-6*z_rad,-10*x_rad);
    c.bezierCurveTo( -10*z_rad,    0*x_rad,  -5*z_rad,   10*x_rad,   0*z_rad,   10*x_rad );
    c.bezierCurveTo(   5*z_rad,   10*x_rad,  10*z_rad,    0*x_rad,   6*z_rad,  -10*x_rad );
    c.bezierCurveTo(   0*z_rad,  -10*x_rad,   0*z_rad,   -7*x_rad,   0*z_rad,   -5*x_rad );
    c.bezierCurveTo(   0*z_rad,   -7*x_rad,   0*z_rad,  -10*x_rad,  -6*z_rad,  -10*x_rad );
    c.fill();
    c.restore();
  }
};

// Implementation
let petals;
function init() {
    petals = [];
    for (let i = 0; i < 100; i++) {
      petals.push(new Petal());
    }
}

/*
async function printPostsToConsole() {
  var x = 1;
  console.log(x);
  await delay(3000);
  console.log('shit');
};
function delay(interval) {
    return new Promise((resolve) => {
        setTimeout(resolve, interval);
    });
};
printPostsToConsole();
*/


// Animation Loop
function animate() {

  requestAnimationFrame(animate);

  c.clearRect(0, 0, canvas.width, canvas.height);

  petals.forEach(petals => {
    petals.update();
  });
}

init();
animate();


window.changePetal = function(id){
  //var f = document.getElementById(id1);
  flower = id;
  petals.forEach(petals => {
    petals.reset();
  });
}
