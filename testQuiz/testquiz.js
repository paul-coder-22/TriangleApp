const quizForm = document.forms[0];
const quizDiv = document.querySelectorAll('.ow')
const submitQuiz = document.getElementById("submitQuiz");
const scoreDiv = document.querySelector('#outputHere')
// , "option1", "option2", "option2", "option3", "option3", "option3"
const correctAns = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3"];
let score = 0;
scoreDiv.style.display = "none";
quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(quizForm);
    let index = 0;
    for (let entry of data) {

        if (entry[1] === correctAns[index]) {
            // console.log(entry[0])
            document.getElementsByName(entry[0])[0].parentElement.parentElement.style.borderColor = "green";
            // document.getElementsByName(entry[0])[0].disabled = true
            // document.getElementById("myLI").parentElement.nodeName;
            score++;
        } else {
            document.getElementsByName(entry[0])[0].parentElement.parentElement.style.borderColor = "red";
        }
        index++;
    }
    document.querySelector('#submitQuiz').style.display = "none";
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML = ` <h4>Final Result  : ${score}</h4>`;
})
console.log(score)
