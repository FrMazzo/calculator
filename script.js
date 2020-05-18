const container = document.querySelector("#container");

const keys = [13, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

const inputBox = container.querySelector("#inputBox");
    inputBox.addEventListener("keypress", e =>{
        let key = e.keyCode;
        if(!keys.includes(key)){
            if(e.preventDefault) e.preventDefault();
        }
    });

    inputBox.addEventListener("keyup", e =>{
        if (e.keyCode === 13) inputBox.value = operate(inputBox.value);
    });

const chars = container.querySelectorAll(".n, .o");

    chars.forEach(c => {
        c.addEventListener("click", e =>{
            inputBox.value = inputBox.value + String(c.id);
        })
    });

const back = container.querySelector("#back");
    back.addEventListener("click", e =>{
        inputBox.value = inputBox.value.slice(0,-1);
    });

const equal = container.querySelector("#equal");
    equal.addEventListener("click", e =>{
        inputBox.value = operate(inputBox.value);
    });

const clear = container.querySelector("#clear");
    clear.addEventListener("click", e =>{
        inputBox.value = "";
    });

function operate(str){
    //Test for alpha chars, consecutive operations, double decimals and checks if the input starts of ends with an operation
    if (/(\.[0-9]?\.|[\/\*]{2,}|[a-zA-Z]|^[\*\/]|[\/\*]$)/.test(str)) return "Error";

    //Transforms valid input into positive/negative numbers and operations
    let arr = str.match(/([\/\*]|(\+|-)?[0-9]+\.[0-9]+|(\+|-)?\.[0-9]+|(\+|-)?[0-9]+)/g);

    console.log(arr);

    for (let i = 0; i < arr.length; i++){

        if (arr[i] === "*"){

            arr[i-1] = Number(arr[i-1]) * Number(arr[i+1]);
            arr.splice(i,2);
            i--;

        } else if (arr[i] === "/"){

            if (Number(arr[i+1]) === 0) return "Error, can't divide by 0";

            arr[i-1] = Number(arr[i-1]) / Number(arr[i+1]);
            arr.splice(i,2);
            i--;
        }
    }
    console.log(arr);
    
    let result = String(arr.reduce((sum, n) => sum + Number(n), 0));
    
    console.log(result + " " + result.length);

    if (result.length > 19 && result.includes(".")){
        let intSubStr = result.substring(0, result.indexOf("."));
        let decimals = 19 - intSubStr.length;

        if (decimals < 0) return parseInt(result);

        return parseFloat(result).toFixed(decimals);
    }
    
    return result;
}
