// A traves de getElementById conseguir las referencias de los elementos y guardaros en constantes/variables)

const rateOne = document.getElementById("aOne");
const rateTwo = document.getElementById("aTwo");
const rateThree = document.getElementById("aThree");
const rateFour = document.getElementById("aFour");
const rateFive = document.getElementById("aFive");

const submitBtn = document.getElementById("button");
const mainCard = document.getElementById("mainCard");
const hiddenCard = document.getElementById("hiddenCard");

let selRate = document.getElementById("selectedRate");
let rated = 0;

// Referencia de cada botón de rate con cada función para cambiar el valor de la variable rated
// MOBILE


rateOne.addEventListener("touchstart", ratedOne);
rateTwo.addEventListener("touchstart", ratedTwo);
rateThree.addEventListener("touchstart", ratedThree);
rateFour.addEventListener("touchstart", ratedFour);
rateFive.addEventListener("touchstart", ratedFive);

// DESKTOP
rateOne.addEventListener("click", ratedOne);
rateTwo.addEventListener("click", ratedTwo);
rateThree.addEventListener("click", ratedThree);
rateFour.addEventListener("click", ratedFour);
rateFive.addEventListener("click", ratedFive);

// Con la referencia del botón "Submit" usar addEventListener para disparar un evento cuanto es tapeado(touch en mobile)
// Ese evento se da con una función como parámetro

submitBtn.addEventListener("click", submitFunc);         // DESKTOP
submitBtn.addEventListener("touchstart", submitFunc);    // MOBILE

// FUNCIONES ->

function submitFunc()
{
    mainCard.style.display = "none";               // Accede a los estilos para cambiar entre una card y la otra
    hiddenCard.style.display = "flex";
    if(rated != 0)
    {
        selRate.innerHTML = "You selected " + rated + " out of 5";
    }
    else
    {
        selRate.innerHTML = "Please rate!";
    }    
}

function ratedOne()
{
    rated = 1;
    rateOne.style.backgroundColor = "hsl(216, 12%, 54%)";
    rateTwo.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateThree.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateFour.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateFive.style.backgroundColor = "hsl(213, 18%, 24%)";
}
function ratedTwo()
{
    rated = 2;
    rateTwo.style.backgroundColor = "hsl(216, 12%, 54%)";
    rateOne.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateThree.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateFour.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateFive.style.backgroundColor = "hsl(213, 18%, 24%)";
}
function ratedThree()
{
    rated = 3;
    rateThree.style.backgroundColor = "hsl(216, 12%, 54%)";
    rateTwo.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateOne.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateFour.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateFive.style.backgroundColor = "hsl(213, 18%, 24%)";
}
function ratedFour()
{
    rated = 4;
    rateFour.style.backgroundColor = "hsl(216, 12%, 54%)";
    rateTwo.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateThree.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateOne.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateFive.style.backgroundColor = "hsl(213, 18%, 24%)";
}
function ratedFive()
{
    rated = 5;
    rateFive.style.backgroundColor = "hsl(216, 12%, 54%)";
    rateTwo.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateThree.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateFour.style.backgroundColor = "hsl(213, 18%, 24%)";
    rateOne.style.backgroundColor = "hsl(213, 18%, 24%)";
}