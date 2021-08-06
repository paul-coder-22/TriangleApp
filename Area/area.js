const clicked = document.querySelectorAll("input[type='radio']")
const forms = document.querySelectorAll('.forms')
forms.forEach(e => {
    e.addEventListener("submit", (f) => {
        f.preventDefault()
    })
})
// auto focus
clicked.forEach(radioEle => {
    /* validity */
    radioEle.addEventListener('change', (radioBtn) => {
        console.log(radioBtn)
        if (radioEle.checked === true) {
            // console.log(radioBtn.target.id === 'calArea1')
            if (radioBtn.target.id === 'calArea1') {
                firstArea(radioBtn);
                radioBtn.checked.id
            } else if (radioBtn.target.id === 'calArea2') {
                secondArea(radioBtn);
            } else if (radioBtn.target.id === 'calArea3') {
                thirdArea(radioBtn);
            }

        }
    })
});

let firstForm = document.getElementById('firstForm');
let secondForm = document.getElementById('secondForm');
let thirdForm = document.getElementById('thirdForm');
let outputForm = document.querySelector('.outputHere');

firstForm.style.display = "none"
secondForm.style.display = "none"
thirdForm.style.display = "none"
outputForm.style.display = "none"

function firstArea() {

    firstForm.style.display = "block"
    secondForm.style.display = "none"
    thirdForm.style.display = "none"
    outputForm.style.display = "block"

    document.getElementById('btn1').addEventListener('click', () => {
        let firstFormBase = Number(document.getElementById('firstFormBase').value);
        let firstFormHeight = Number(document.getElementById('firstFormHeight').value);
        // console.log(firstFormBase + firstFormHeight)
        if (firstFormBase < 0.0001 || firstFormHeight < 0.0001) {
            outputForm.innerHTML = 'Please Enter a valid value'
        } else {
            outputForm.innerHTML = `OutPut  ${0.5 * firstFormBase * firstFormHeight}`

        }
    })
}
function secondArea() {

    firstForm.style.display = "none"
    secondForm.style.display = "block"
    thirdForm.style.display = "none"
    outputForm.style.display = "block"

    document.getElementById('btn2').addEventListener('click', () => {
        let a = Number(document.getElementById('secondFormfirstSide').value);
        let b = Number(document.getElementById('secondFormSecondSide').value);
        let c = Number(document.getElementById('secondFormThirdSide').value);
        // console.log(firstFormBase + firstFormHeight)
        if ((a + b) > c && (a + c) > b && (c + b) > a) {
            const avg = (a + b + c) / 2;
            const area = Math.sqrt(avg * ((avg - a) * (avg - b) * (avg - c))).toFixed(2)
            outputForm.innerHTML = `${area}`
        } else {
            outputForm.innerHTML = `Please enter the side length  such that sum of two length greater than one length`;
        }
    })
}
function thirdArea() {
    firstForm.style.display = "none"
    secondForm.style.display = "none"
    thirdForm.style.display = "block"
    outputForm.style.display = "block"
    document.getElementById('btn3').addEventListener('click', () => {
        let thirdFormBase = Number(document.getElementById('thirdFormBase').value);
        let thirdFormHypotenous = Number(document.getElementById('thirdFormHypotenous').value);
        let thirdFormAngle = Number(document.getElementById('thirdFormAngle').value);
        // console.log(firstFormBase + firstFormHeight)
        if (thirdFormBase < 0.0001 || thirdFormHypotenous < 0.0001) {
            outputForm.innerHTML = 'Please Enter a valid value'
        } else if (thirdFormAngle < 0 || thirdFormAngle > 360) {
            if (thirdFormAngle < 0) {
                outputForm.innerHTML = `Please Put a valid angle`
            } else {
                outputForm.innerHTML = `Angle will not be greater than 360`
            }
        } else {
            const area = 0.5 * thirdFormBase * thirdFormHypotenous * Math.sin(thirdFormAngle);
            outputForm.innerHTML = `<h3>Area = ${area}</h3>`
        }
    })
}