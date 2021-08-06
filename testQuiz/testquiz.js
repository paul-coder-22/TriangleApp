const quizForm = document.forms[0];
const quizDiv = document.querySelectorAll('.ow')
const submitQuiz = document.getElementById("submitQuiz");
const scoreDiv = document.querySelector('#outputHere')
// , "option1", "option2", "option2", "option3", "option3", "option3"
const correctAns = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3"];
let score = 0;
quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(quizForm);
    let index = 0;
    for (let entry of data) {
        if (entry[1] === correctAns[index]) {
            console.log(score)
            score++;
        }
        index++;
    }
    scoreDiv.innerHTML = score;
})
console.log(score)