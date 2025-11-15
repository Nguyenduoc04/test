function convertCurrency(){
    let amount = parseFloat(document.getElementById('amount').value);
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
    if (isNaN(amount)) {
        alert("Please enter a valid number");
        return;
    }
    let result = 0;
    if (fromCurrency === toCurrency) {
        result = amount; // cùng đơn vị
    } else if (fromCurrency === "USD" && toCurrency === "VND") {
        result = amount * 25000;
    } else if (fromCurrency === "VND" && toCurrency === "USD") {
        result = amount / 25000;
    }
    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${toCurrency}`;
}

