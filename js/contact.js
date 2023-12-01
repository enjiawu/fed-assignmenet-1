//Contact Form Submitted Message
const ContactForm = document.getElementById("contact-form"); //Getting the contact form
const SubmissionConfirmation = document.getElementById("submission-confirmation"); //Getting the submission confirmation

ContactForm.addEventListener('submit', function(event){ //When the form is submitted
    event.preventDefault(); //Preventing the default behaviour of the form
    console.log("Form submitted successfully"); //Logging the form submission
    SubmissionConfirmation.style.display = "block"; //Showing the submission confirmation
    setTimeout(() => {
        SubmissionConfirmation.style.display = "none"; //Hiding the Submission Confirmation
        console.log("Function paused for 2 second");
    }, 2000);
    ContactForm.reset(); // Clear the form fields
})
