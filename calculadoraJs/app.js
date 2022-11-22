// inicializar variável count
let result = "";
let op = "";
let num1 = 0;
let num2 = 0;
// selecionar valores e botões
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        result = value.textContent;
        if (styles.contains("1")) {
            if (result != "0") {
                result = result + "1";
            }
            else {
                result = "1";
            }
        }
        else if (styles.contains("2")) {
            if (result != 0) {
                result = result + "2";
            }
            else {
                result = "2";
            }
        }
        else if (styles.contains("3")) {
            if (result != 0) {
                result = result + "3";
            }
            else {
                result = "3";
            }
        }
        else if (styles.contains("4")) {
            if (result != 0) {
                result = result + "4";
            }
            else {
                result = "4";
            }
        }
        else if (styles.contains("5")) {
            if (result != 0) {
                result = result + "5";
            }
            else {
                result = "5";
            }
        }
        else if (styles.contains("6")) {
            if (result != 0) {
                result = result + "6";
            }
            else {
                result = "6";
            }
        }
        else if (styles.contains("7")) {
            if (result != 0) {
                result = result + "7";
            }
            else {
                result = "7";
            }
        }
        else if (styles.contains("8")) {
            if (result != 0) {
                result = result + "8";
            }
            else {
                result = "8";
            }
        }
        else if (styles.contains("9")) {
            if (result != 0) {
                result = result + "9";
            }
            else {
                result = "9";
            }
        }
        else if (styles.contains("0")) {
            if (result != "0") {
                result = result + "0";
            }
            else {
                result = "0";
            }
        }
        else if (styles.contains("subtrair")) {
            if (num1 != 0) {
                num2 = value.textContent;
            }
            else if (num2 != 0) {
                num1 = num1 - value.textContent;
            }
            else {
                num1 = value.textContent;
            }
            op = "-";
            result = "0";
        }
        else if (styles.contains("somar")) {
            if (num1 == 0) {
                num1 = value.textContent;
                result = 0;
                op = "+";
            }
            else {
                num2 = parseFloat(value.textContent);
                result = 0;
                op = "+";
            }

        }
        else if (styles.contains("multiplicar")) {

            if (num1 != 0) {
                num2 = value.textContent;
            }
            else if (num1 != 0 && num2 != 0) {
                result = num1 * num2;
            }
            else {
                num1 = value.textContent;
            }
            op = "*";
            result = "0";
        }
        else if (styles.contains("dividir")) {
            if (num1 != 0) {
                num2 = value.textContent;
            }
            else if (num2 != 0) {
                num1 = num1 - value.textContent;
            }
            else {
                num1 = value.textContent;
            }
            op = "/";
            result = "0";
        }
        else if (styles.contains("igual")) {
            if (num2 != 0) {
                num1 = value.textContent;
            }
            else {
                num2 = value.textContent;
            }
            switch (op) {
                case "-":
                    result = parseFloat(num1) - parseFloat(num2);
                    break;
                case "+":
                    result = parseFloat(num1) + parseFloat(num2);
                    break;
                case "*":
                    result = parseFloat(num1) * parseFloat(num2);
                    break;
                case "/":
                    if (num2 == 0) {
                        result = "Não é possivel dividir por zero";
                    }
                    else {
                        result = parseFloat(num1) / parseFloat(num2);
                    }
                    break;
            }
            if (result > 0) {
                value.style.color = "green";
            }
            if (result < 0) {
                value.style.color = "red";
            }
            if (result === 0) {
                value.style.color = "#222";
            }
        }
        else if (styles.contains("reset")) {
            num1 = 0
            num2 = 0;
            result = 0;
            value.textContent = "0";
        }
        else {
            result = 0;
        }


        value.textContent = result;

    });
});