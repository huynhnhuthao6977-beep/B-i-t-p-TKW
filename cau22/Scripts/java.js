function multiplyBy() {
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;

    
    
    let result = Number(num1) * Number(num2);
    document.getElementById("result").innerText = result;
}

function divideBy() {
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;

    if(Number(num2) === 0) {
        document.getElementById("result").innerText = "Lỗi: Không thể chia cho 0";
    } else {
        let result = Number(num1) / Number(num2);
        document.getElementById("result").innerText = result;
    }
}