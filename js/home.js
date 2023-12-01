//Newsletter Popup
const NewsletterPopup = document.getElementById("newsletter-popup"); //Getting the newsletter popup
const NewsletterText = document.getElementById("newsletter-h2"); //Getting the newsletter text
const NewsletterPopupForm = document.getElementById("newsletter-popup-form"); //Getting the newsletter popup form
const NewsletterPopupSubmittedMessage = document.getElementById("submitted-popup-form"); //Getting the
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
}
 
function WelcomeMessage(){
    NewsletterText.style.display = "none"; //Hiding the newsletter text
    NewsletterPopupForm.style.display = "none"; //Hiding the newsletter form
    NewsletterPopupSubmittedMessage.style.display = "block"; //Showing the newsletter submitted message
    NewsletterPopup.style.backgroundColor = "rgb(255, 239, 219)"; //Changing the background color of the form to brighter beige
    ClosePopupButton.style.display = "none"; //Hiding the close button
}

function CloseNewsletter(){
    enableScroll(); //Enable scroll when newsletter popup has been closed by user
    NewsletterPopup.style.display='none'; //Closing the newsletter popup
}

NewsletterPopupForm.addEventListener('submit', function(event){ //When the form is submitted
    event.preventDefault(); //Preventing the default behaviour of the form
    console.log("Form submitted successfully"); //Logging the form submission
    WelcomeMessage();
    setTimeout(() => {
        NewsletterPopup.style.display = "none"; //Hiding the newsletter popup
        enableScroll(); //Enable scroll when newsletter popup has been closed by user
        console.log("Function paused for 2 second");
      }, 2000);
})

//Submitted form for newsletter at the bottom of home page
const NewsLetterForm = document.getElementById("newsletter-form"); //Getting the newsletter form
const NewsLetterSubmittedMessage = document.getElementById("submitted-newsletter-form"); //Getting the newsletter submitted message
NewsLetterForm.addEventListener('submit', function(event){ //When the form is submitted
    event.preventDefault(); //Preventing the default behaviour of the form
    console.log("Form submitted successfully"); //Logging the form submission
    NewsLetterSubmittedMessage.style.display = "block";
    setTimeout(() => {
        NewsLetterSubmittedMessage.style.display = "none"; //Hiding the newsletter popup
        enableScroll(); //Enable scroll when newsletter popup has been closed by user
        console.log("Function paused for 2 second");
      }, 2000);
      NewsLetterForm.reset(); // Clear the form fields
})
