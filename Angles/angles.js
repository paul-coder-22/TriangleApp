let x = document.querySelector("#anglesForm");
function getValues() {
    let result = 0
    for (const val of x) {
        result += Number(val.value);
    }
    if (result == 180) {
        document.querySelector('.output').innerHTML = '≽ Yuhu! these angles can make a triangle'
    } else {
        document.querySelector('.output').innerHTML = 'Oops! these angles cannot make a triangle'
    }
}