const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const form = document.querySelector('form')
const username = document.querySelector('input[name="username"]');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
const cpassword = document.querySelector('input[name="cpassword"]');
const submitted = document.querySelector('.submitted');
let isFormValid = false;
let isValidationOn = false;

let messages = [username, email, password, cpassword]

const resetElm = (elm) => {
    elm.classList.remove('invalid');
    elm.nextElementSibling.classList.add("hidden");
}

const invalidateElm = (elm) => {
    elm.classList.add('invalid');
    elm.nextElementSibling.classList.remove("hidden");
}

const matchPasswords = () => {
    if (password.value !== cpassword.value) {
        isFormValid = false;
        invalidateElm(cpassword);
    }

}

const validateInputs = () => {
    if (!isValidationOn) return;

    isFormValid = true;
    resetElm(username);
    resetElm(email)
    resetElm(password);
    resetElm(cpassword)

    if (!username.value) {
        isFormValid = false;
        invalidateElm(username);
    }
    if (!isValidEmail(email.value)) {
        isFormValid = false;
        invalidateElm(email);
    }
    if (!password.value) {
        isFormValid = false;
        invalidateElm(password);
    }
    if (!cpassword.value) {
        isFormValid = false;
        invalidateElm(cpassword);

    }
};


form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidationOn = true;

    validateInputs();
    matchPasswords();

    if (isFormValid) {
        form.remove();
        submitted.classList.remove('hidden');
    }


});

messages.forEach(message => {
    message.addEventListener('input', e => {
        validateInputs();
    });
})





