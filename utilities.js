/*******************************************************************************************/
/* ******************************** FONCTIONS UTILITAIRES **********************************/
/*******************************************************************************************/

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