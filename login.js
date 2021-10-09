
// Login Activity

const inputEmail = document.querySelector('.input-email')
const inputPassword = document.querySelector('.input-pwd')
const error = document.querySelector('.error')
const pwdError = document.querySelector('.error-pwd')

// Confirm email
inputEmail.onblur = function() {
    let email = inputEmail.value
    if (email.includes('@') === false) {
        error.textContent = 'Not a valid email!'
        inputEmail.classList.add('invalid');
    } else if (email.includes('gmail.com') === false) {
        error.textContent = 'Please include gmail.com'
        inputEmail.classList.add('invalid')
    } 
}

inputEmail.onfocus = function() {
    if (this.classList.contains('invalid')) {
        inputEmail.classList.remove('invalid')
        error.textContent = ''
    }
}

// Confirm password
inputPassword.onblur = function() {
    let pwd = inputPassword.value
    if (pwd === '') {
        pwdError.textContent = 'Input a valid password'
        inputPassword.classList.add('invalid')
    } else if (pwd.length < 6) {
        pwdError.textContent = 'Password must be greater than 6 characters'
        inputPassword.classList.add('invalid')
    } else if ((pwd.search(/[a-zA-Z]+/)==-1) || (pwd.search(/[0-9]+/)==-1)) {
        pwdError.textContent = 'Password must combination of letters and number'
        inputPassword.classList.add('invalid')
    }
}

inputPassword.onfocus = function() {
    if (this.classList.contains('invalid')) {
        inputPassword.classList.remove('invalid')
        pwdError.textContent = ''
    }
}

