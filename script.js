const uploadPictureInput = document.getElementById('uploadPictureInput');
const fullNameInput = document.getElementById('fullNameInput');
const emailAddress = document.getElementById('emailAddress');
const githubUsername = document.getElementById('githubUsername');
const submitButton = document.getElementById('submitButton');
const errorMessageParagraph = document.querySelectorAll('.main-itself-form-itself-inner-paragraph');
const formItself = document.querySelector('.main-itself-form-itself');
const formSuccess = document.querySelector('.main-itself-form-success');
const allInputs = document.querySelectorAll('.main-itself-form-itself-input');
const inputTypes = ['Picture', 'Full Name', 'Email Address', 'Github Username'];

// UPLOADING PICTURE

uploadPictureInput.addEventListener('change', () => {
    const reader = new FileReader();
    reader.readAsDataURL(uploadPictureInput.files[0]);

    reader.addEventListener('load', () => {
        // HERE I HAVE TO USE THE IMAGE ELEMENT OF SUCCES
    });
});

// GENERATE A TICKET

function generateTicket(e) {
    e.preventDefault();

    const errorMessages = [];
    
    // DECLARING A VARIBALE TO USE IN THE BELOW LOOP
    let i = 0;
    
    while (i < errorMessageParagraph.length) {
        if (allInputs[i].value < 1) {
            errorMessages.push('Empty Input');
            errorMessageParagraph[i].textContent = `Please enter your ${inputTypes[i]}.`;
        } else {
            errorMessageParagraph[i].textContent = '';
        };

        // INCREMENTING BY ONE
        i++;
    };

    // EMAIL VERIFICATION
    if (!(emailAddress.value.includes('@') && emailAddress.value.includes('.'))) {
        errorMessages.push('Email Address is not valid.');
        errorMessageParagraph[2].textContent = 'Please enter a valid email address';
    } else {
        errorMessageParagraph[2].textContent = '';
    };

    // GITHUB VERIFICATION
    if (!(githubUsername.value.startsWith('@'))) {
        errorMessages.push('Github username is not valid.');
        errorMessageParagraph[3].textContent = 'The username should contain \'@\'.';
    } else {
        errorMessageParagraph[3].textContent = '';
    };

    // THE FORM WILL BE SUBMITTED IF ALL THE REQUIREMENTS ARE MET.
    if (errorMessages.length === 0) {
        formItself.classList.add('main-itself-form-itself-inactive');
        formSuccess.classList.add('main-itself-form-success-active');
    };
};


// INITIALIZING BUTTONS
submitButton.addEventListener('click', generateTicket);