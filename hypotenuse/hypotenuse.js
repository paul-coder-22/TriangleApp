let base = document.querySelector("#base")
let height = document.querySelector("#height")

function getValue() {
    if (base.value < 1 || height.value < 1) {
        document.querySelector('#resultView').innerHTML = "Please Enter a Valid Value"
    } else {
        document.querySelector('#resultView').innerHTML = Math.sqrt((base.value * base.value) + (height.value * height.value)).toFixed(2);
    }
}