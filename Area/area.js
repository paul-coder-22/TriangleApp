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

        if (radioEle.checked === true) {
            // console.log(radioBtn.target.id === 'calArea1')
            if (radioBtn.target.id === 'calArea1') {
                firstArea(radioBtn);
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
let outputForm = document.querySelectorAll('.outputHere');

firstForm.style.display = "none"
secondForm.style.display = "none"
thirdForm.style.display = "none"
outputForm.map(ele => {
    ele.style.display = 'none';
})
console.log(outputForm);

function firstArea() {

    firstForm.style.display = "block"
    secondForm.style.display = "none"
    thirdForm.style.display = "none"
    outputForm[0].style.display = "inline"

    document.getElementById('btn1').addEventListener('click', () => {
        let firstFormBase = Number(document.getElementById('firstFormBase').value);
        let firstFormHeight = Number(document.getElementById('firstFormHeight').value);
        // console.log(firstFormBase + firstFormHeight)
        if (firstFormBase < 0.0001 || firstFormHeight < 0.0001) {
            outputForm[0].innerHTML = 'Please Enter a valid value'
        } else {
            outputForm[0].innerHTML = `${0.5 * firstFormBase * firstFormHeight}`

        }
    })
}
function secondArea() {

    firstForm.style.display = "none"
    secondForm.style.display = "block"
    thirdForm.style.display = "none"
    outputForm[1].style.display = "inline";

    document.getElementById('btn2').addEventListener('click', () => {
        let a = Number(document.getElementById('secondFormfirstSide').value);
        let b = Number(document.getElementById('secondFormSecondSide').value);
        let c = Number(document.getElementById('secondFormThirdSide').value);
        console.log("Hello")
        // console.log(firstFormBase + firstFormHeight)
        if ((a + b) > c && (a + c) > b && (c + b) > a) {
            let avg = (a + b + c) / 2;
            let area = Math.sqrt(avg * ((avg - a) * (avg - b) * (avg - c))).toFixed(2);
            outputForm[1].innerHTML = `${area}`
            console.log(outputForm[1].innerHTML)  /* 61 */
        } else {
            outputForm[1].innerHTML = `Please enter the side length  such that sum of two length greater than one length`;
        }
    })
}
function thirdArea() {
    firstForm.style.display = "none"
    secondForm.style.display = "none"
    thirdForm.style.display = "block"
    outputForm[2].style.display = "inline"
    document.getElementById('btn3').addEventListener('click', () => {
        let thirdFormBase = Number(document.getElementById('thirdFormBase').value);
        let thirdFormHypotenous = Number(document.getElementById('thirdFormHypotenous').value);
        let thirdFormAngle = Number(document.getElementById('thirdFormAngle').value);
        // console.log(firstFormBase + firstFormHeight)
        if (thirdFormBase < 0.0001 || thirdFormHypotenous < 0.0001) {
            outputForm[2].innerHTML = 'Please Enter a valid value'
        } else if (thirdFormAngle < 0 || thirdFormAngle > 360) {
            if (thirdFormAngle < 0) {
                outputForm[2].innerHTML = `Please Put a valid angle`
            } else {
                outputForm[2].innerHTML = `Angle will not be greater than 360`
            }
        } else {
            const area = (thirdFormBase * thirdFormHypotenous * Math.sin(thirdFormAngle * Math.PI / 180)) / 2;
            outputForm[2].innerHTML = `${area.toFixed(2)}`
        }
    })
}