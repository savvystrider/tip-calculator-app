const bill = document.getElementById("bill");
const numPeople = document.getElementById("number-of-people");
const radioButtons = document.querySelectorAll("input[type='radio']");
const tipAmtDisplay = document.getElementById("tip-amount-display");
const totalDisplay = document.getElementById("total-display");
const customTip = document.getElementById("custom-tip");
const resetBtn = document.getElementById("reset-btn");

function calculateTipAmount() {
    const selectedButton = document.querySelector("input[type='radio']:checked");
    let tipPercentage = 0;
    if (selectedButton) {
        tipPercentage = selectedButton.value / 100;
    } else if (customTip.value) {
        tipPercentage = customTip.value / 100;
    }
    return tipPercentage;
};

function calculateTotalAmount() {
    const selectedButton = document.querySelector("input[type='radio']:checked");
    let tipPercentage = 0;
    if (selectedButton) {
        tipPercentage = selectedButton.value / 100;
    } else if (customTip.value) {
        tipPercentage = customTip.value / 100;
    }
    const tipAmount = (bill.value * tipPercentage) / numPeople.value;
    const totalAmount = (bill.value / numPeople.value) + tipAmount;
    tipAmtDisplay.textContent = "$" + tipAmount.toFixed(2);
    totalDisplay.textContent = "$" + totalAmount.toFixed(2);
};

radioButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (Number(bill.value) > 0 && Number(numPeople.value) > 0) {
            calculateTipAmount();
            calculateTotalAmount();
        }
    })
})

customTip.addEventListener("keyup", function() {
    if (Number(bill.value) > 0 && Number(numPeople.value) > 0 && customTip.value) {
        document.getElementById("reset-btn").style.color = "#fff";
        calculateTipAmount();
        calculateTotalAmount();
    }
})

numPeople.addEventListener("keyup", function() {
    if (Number(bill.value) > 0 && Number(numPeople.value) > 0) {
        resetBtn.style.color = "#fff";
        calculateTipAmount();
        calculateTotalAmount();
    }
});

bill.addEventListener("keyup", function() {
    if (Number(bill.value) > 0 && Number(numPeople.value) > 0) {
        document.getElementById("reset-btn").style.color = "#fff";
        calculateTipAmount();
        calculateTotalAmount();
    }
});

resetBtn.addEventListener("click", function() {
    bill.textContent = "";
    tipAmtDisplay.textContent = "$0.00";
    totalDisplay.textContent = "$0.00";
    numPeople.textContent = "";
    resetBtn.style.color = "#00474B";
})