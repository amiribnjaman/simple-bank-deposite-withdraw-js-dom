// Account No
let accountNo = 12345;

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

let totalDepositeText = document.getElementById('total-deposite-card')

// total Amout
let totalAmount = document.getElementById('total-amount')

confirmDepositeBtn.addEventListener('click', function(){

    let msg = ''
    let account = parseInt(userAcountDepo.value)
    let depositeAmount = parseFloat(newDepositeInput.value)
    // console.log(typeof depositeAmount)
    let msgShow = document.getElementById('msg')
    if(userAcountDepo.value == '' || depositeAmount == ''){
        msg = 'Please provide valid A/C No and amount.'
    } else if(account == accountNo){
        msg = 'You have successfully deposite.'
        lastDepositeText.innerText = depositeAmount
        lastDepositeCardText.innerText = depositeAmount


        // card total
        let total =  parseFloat(totalDepositeText.innerText) + depositeAmount
        // console.log(lastDepositeCardText.innerText)
        totalDepositeText.innerText = total

        // total calculation
        totalAmount.innerText = parseFloat(totalAmount.innerText) + depositeAmount
    } else {
        msg = 'Something is invalid. Try again!'
    }
    newDepositeInput.value = ''
    userAcountDepo.value = ''
    msgShow.innerText = msg;


})



// Withdraw functionality
let confirmWithdraw = document.getElementById('withdraw-confirm')
let withdrawAccountText = document.getElementById('withdraw-account')
let withdrawAmountText = document.getElementById('withdraw-amount')



// withdraw

let lastWithdrawCardText = document.getElementById('last-withdraw-card')
let lastWithdrawText = document.getElementById('last-withdraw')
let totalCardWithdraw = document.getElementById('total-card-withdraw')


// event listener
confirmWithdraw.addEventListener('click', function(){
    
    let msg = ''
    let withdrawAccount = withdrawAccountText.value
    let withdrawAmount =  withdrawAmountText.value
    let msgShow = document.getElementById('withdraw-msg')

    if(withdrawAccount == '' || withdrawAmount == ''){
        msg = 'Field must not be empty.'
    } else if(withdrawAccount == accountNo){
        msg = 'Your withdraw have been succeed.'
        lastWithdrawCardText.innerText = withdrawAmount
        lastWithdrawText.innerText = withdrawAmount


        // total withdraw card
        let totalwithdraw = parseInt(totalCardWithdraw.innerText) + parseInt(withdrawAmount)
        totalCardWithdraw.innerText = totalwithdraw

        // total withdraw
        let total = parseInt(totalAmount.innerText) - parseInt(lastWithdrawCardText.innerText)

        totalAmount.innerText = total


    } else {
        msg = 'Something is invalid. Try again!'
    }

    msgShow.innerHTML = msg
    withdrawAccountText.value = ''
    withdrawAmountText.value = ''

})