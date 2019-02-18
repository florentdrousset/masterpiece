/***** DATA *****/

var canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');


//Constructeur de cercles
function Circle(x, y, radius, color) {
    this.x = x;
    this. y = y;
    this. radius = radius;
    this.color = color;
    this.create = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}


/***** FUNCTIONS *****/

function getRandomInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor()
{
    var red = (getRandomInteger(1, 255)).toString();
    var green = (getRandomInteger(1, 255)).toString();
    var blue = (getRandomInteger(1, 255)).toString();
    var color = 'rgb('+ red +','+ green + ','+blue+')';
    return color;
}

function newCircle() {
    //Crée un nouveau cercle à l'aide du constructeur Circle
    var arrayXY = followMouse();
    var x = arrayXY[0];
    var y = arrayXY[1];
    myCircle = new Circle(x, y, getRandomInteger(40, 300), getRandomColor());
    myCircle.create();
}

function followMouse() {
    var mousePosition = [event.clientX, event.clientY];
    return mousePosition;
}
/***** EVENT LISTENER *****/

document.addEventListener('mousemove', followMouse);

canvas.addEventListener("click", newCircle);
