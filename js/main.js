//Making the hamburger responsive
//Getting the hamburger elements
const hamburger = document.getElementsByClassName("hamburgers");
const bars = document.getElementsByClassName("bar");

//Function to see if the button is clicked and respond accordingly
function hamburgerClick() 
{
    if (hamburger.onclick === true){
        alert("Button Clicked")
    }
}