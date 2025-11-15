function calculate(op){
    let no1 = parseFloat(document.getElementById('no1').value);
    let no2 = parseFloat(document.getElementById('no2').value);
    if(isNaN(no1) || isNaN(no2)){
        alert("Please enter a valid number");
        return;
    }
    let result = 0;
    switch(op) {
        case 'add':
            result = no1 + no2;
            break;
        case 'sub':
            result = no1 - no2;
            break;
        case 'mul':
            result = no1 * no2;
            break;
        case 'div':
            if(no2 === 0){
                alert("Cannot divide by zero");
                return;
            }
            result = no1 / no2;
            break;
    }

    document.getElementById('result').innerText = `Result: ${result.toFixed(2)}`;
}