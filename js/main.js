//Navigation Bar
const navigationButtons = document.getElementById("navigation-buttons");  //Getting Navigation Buttons
const socialmediaButtons = document.getElementById("nav-socialmedia-buttons"); //Getting Social Media Buttons
const NavContainer = document.getElementById("nav-container"); //Getting the hamburger nav container

//Making the hamburger responsive
function hamburgerClick(){ //Making the hamburger menu pop out when clicked
    if (navigationButtons.style.display === "flex" && socialmediaButtons.style.display === "flex"){ //If both the navigation and social media buttons are visible
        navigationButtons.style.display = "none"; //Hiding the navigation buttons
        socialmediaButtons.style.display = "none"; //Hiding the social media buttons
        NavContainer.style.height = "65px"; //Changing the height back to 65px
        NavContainer.style.backgroundColor = "#ec6262"; //Changing the color back to the original
    }
    else{
        navigationButtons.style.display = "flex"; //Showing the navigation buttons
        socialmediaButtons.style.display = "flex"; //Showing the social media buttons
        NavContainer.style.height = "500px"; //Increasing the navigation's background height
        NavContainer.style.backgroundColor = "#c57777"; //Changing the color to a darker shade
    }
}
//Making sure that the hamburger button doesnt make the display for the buttons none when the screen is expanded
window.addEventListener("resize", function(){
    if (window.innerWidth > 900){ /*Check if window width is greater than 900px*/
        navigationButtons.style.display = "flex"; //Showing the navigation buttons
        socialmediaButtons.style.display = "flex"; //Showing the social media buttons
        NavContainer.style.height = "75px"; //Making sure the height is 75px
        NavContainer.style.backgroundColor = "#ec6262"; //Changing the color back to the original
    }
    else{
        navigationButtons.style.display = "none"; //Hiding the navigation buttons
        socialmediaButtons.style.display = "none"; //Hiding the social media buttons
        NavContainer.style.height = "65px"; //Making sure the height is 65px
        NavContainer.style.backgroundColor = "#ec6262"; //Changing the color back to the original
    }
});

//Newsletter Popup
const NewsletterPopup = document.getElementById("newsletter-popup"); //Getting the newsletter popup
const NewsletterText = document.getElementById("newsletter-h2"); //Getting the newsletter text
const NewsletterForm = document.getElementById("newsletter-popup-form"); //Getting the newsletter popup form
const NewsletterSubmittedMessage = document.getElementById("submitted-popup-form"); //Getting the
const ClosePopupButton = document.getElementById("close-popup-button"); //Getting the close button

function disableScroll(){
    window.scrollTo(0,0);
    document.body.style.overflow = "hidden"; //Disabling the scroll
}

function enableScroll(){
    document.body.style.overflow = "scroll"; //Enabling the scroll
}

if (NewsletterPopup.style.display != "none"){ //If the newsletter popup is active, so that it doesnt affect the other pages
    disableScroll(); //Disable scroll when newsletter popup is active
    console.log("Scroll Disabled");
}
 
function WelcomeMessage(){
    NewsletterText.style.display = "none"; //Hiding the newsletter text
    NewsletterForm.style.display = "none"; //Hiding the newsletter form
    NewsletterSubmittedMessage.style.display = "block"; //Showing the newsletter submitted message
    NewsletterPopup.style.backgroundColor = "rgb(255, 239, 219)"; //Changing the background color of the form to brighter beige
    ClosePopupButton.style.display = "none"; //Hiding the close button
}

function CloseNewsletter(){
    enableScroll(); //Enable scroll when newsletter popup has been closed by user
    NewsletterPopup.style.display='none'; //Closing the newsletter popup
}

NewsletterForm.addEventListener('submit', function(event){ //When the form is submitted
    event.preventDefault(); //Preventing the default behaviour of the form
    console.log("Form submitted successfully"); //Logging the form submission
    WelcomeMessage();
    setTimeout(() => {
        NewsletterPopup.style.display = "none"; //Hiding the newsletter popup
        enableScroll(); //Enable scroll when newsletter popup has been closed by user
        console.log("Function paused for 2 second");
      }, 2000);
})


