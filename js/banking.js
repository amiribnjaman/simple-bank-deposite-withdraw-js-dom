// let totalAmount = document.getElementById('total-amount')
// let lastDeposite = document.getElementById('total-deposite')
// let lastWithdraw = document.getElementById('total-withdraw')

// Account No
let accountNo = 123;

// New deposite inputs
let confirmDepositeBtn = document.getElementById('confirmDepositeBtn')
let userAcountDepoText = document.getElementById('accountNoDepo')
let newDepositeInput = document.getElementById('newDepositeInput')
let userAcountDepo = userAcountDepoText

// New deposites valus
let lastDepositeText = document.getElementById('last-deposite')
let lastDepositeCardText = document.getElementById('last-deposite-card')
let lastDepositeCard = parseFloat(lastDepositeCardText.innerText)
let lastDeposite = parseFloat(lastDepositeText.innerText)
// let totalDeposite = document.getElementById('total-deposite')

let totalDepositeText = document.getElementById('total-deposite-card')


confirmDepositeBtn.addEventListener('click', function () {

    let msg = ''
    let account = parseInt(userAcountDepo.value)
    let depositeAmount = parseFloat(newDepositeInput.value)
    console.log(typeof depositeAmount)
    let msgShow = document.getElementById('msg')
    if (userAcountDepo.value == '' || depositeAmount == '') {
        msg = 'Please provide valid A/C No and amount'
    } else if (account == accountNo) {
        msg = 'You have successfully deposite.'
        lastDepositeText.innerText = depositeAmount
        lastDepositeCardText.innerText = depositeAmount


        let total = parseFloat(totalDepositeText.innerText) + depositeAmount
        console.log(lastDepositeCardText.innerText)
        totalDepositeText.innerText = total

    }
    newDepositeInput.value = ''
    userAcountDepo.value = ''
    msgShow.innerText = msg;


})