let balance = 0;

function updateBalanceDisplay() {
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent =` Current Balance: $${balance.toFixed(2)}`;
}

function deposit() {
    const depositInput = document.getElementById('depositAmount');
    const amount = parseFloat(depositInput.value);

    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        alert(`Deposited: $${amount.toFixed(2)}, New Balance: $${balance.toFixed(2)}`);
        depositInput.value = '';
        updateBalanceDisplay();
    } else {
        alert("Deposit amount must be a positive number.");
    }
}

function withdraw() {
    const withdrawInput = document.getElementById('withdrawAmount');
    const amount = parseFloat(withdrawInput.value);

    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        alert(`Withdrawn: $${amount.toFixed(2)}, New Balance: $${balance.toFixed(2)}`);
        withdrawInput.value = '';
        updateBalanceDisplay();
    } else {
        alert("Insufficient balance or invalid amount.");
    }
}