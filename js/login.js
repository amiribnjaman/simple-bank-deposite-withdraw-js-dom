let email = document.getElementById('email-field')
let password = document.getElementById('password-field')
let logIn = document.getElementById('loginBnt')

logIn.addEventListener('click', function name(params){

    let msg = document.getElementById('msg-show')

    if(email.value == '' || password.value == ''){
        msg.innerText = 'Field must not be empty'
    } else if(email.value == 'amir@gmail.com' && password.value == '12345') {
        window.location.href = 'banking.html'
    } else {
        msg.innerText = 'Email or password invalid'
    }

    email.value = ''
    password.value = ''
    msg = ''
})