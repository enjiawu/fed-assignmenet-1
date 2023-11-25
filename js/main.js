//Navigation Bar
//Making the hamburger responsive
function hamburgerClick(){ //Making the hamburger menu pop out when clicked
    const navigationButtons = document.getElementById("navigation-buttons");  //Getting Navigation Buttons
    const socialmediaButtons = document.getElementById("nav-socialmedia-buttons"); //Getting Social Media Buttons
    const NavContainer = document.getElementById("nav-container"); //Getting the hamburger nav container

    if (navigationButtons.style.display === "flex" && socialmediaButtons.style.display === "flex"){ //If both the navigation and social media buttons are visible
        navigationButtons.style.display = "none"; //Hiding the navigation buttons
        socialmediaButtons.style.display = "none"; //Hiding the social media buttons
        NavContainer.style.height = "65px"; //Changing the height back to 65px
        NavContainer.style.backgroundColor = "rgb(153, 176, 241)"; //Changing the color back to the original
    }
    else{
        navigationButtons.style.display = "flex"; //Showing the navigation buttons
        socialmediaButtons.style.display = "flex"; //Showing the social media buttons
        NavContainer.style.height = "500px"; //Increasing the navigation's background height
        NavContainer.style.backgroundColor = "rgb(127, 142, 184)"; //Changing the color to a darker shade
    }
}
//Making sure that the hamburger button doesnt make the display for the buttons none when the screen is expanded
window.addEventListener("resize", function(){
    const navigationButtons = document.getElementById("navigation-buttons");  //Getting Navigation Buttons
    const socialmediaButtons = document.getElementById("nav-socialmedia-buttons"); //Getting Social Media Buttons
    const NavContainer = document.getElementById("nav-container"); //Getting the hamburger nav container


    if (window.innerWidth > 900){ /*Check if window width is greater than 900px*/
        navigationButtons.style.display = "flex"; //Showing the navigation buttons
        socialmediaButtons.style.display = "flex"; //Showing the social media buttons
        NavContainer.style.height = "75px"; //Making sure the height is 75px
        NavContainer.style.backgroundColor = "rgb(153, 176, 241)"; //Changing the color back to the original
    }
    else{
        navigationButtons.style.display = "none"; //Hiding the navigation buttons
        socialmediaButtons.style.display = "none"; //Hiding the social media buttons
        NavContainer.style.height = "65px"; //Making sure the height is 65px
        NavContainer.style.backgroundColor = "rgb(153, 176, 241)"; //Changing the color back to the original
    }
});
