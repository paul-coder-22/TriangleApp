function getValue() {
    let base = Number(document.getElementById("formValue")[0].value)
    let height = Number(document.getElementById("formValue")[1].value)
    document.getElementById('resultView').innerHTML = Math.sqrt((base * base) + (height * height)).toFixed(2)
}