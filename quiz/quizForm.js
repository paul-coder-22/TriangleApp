console.log(document.querySelector("legend").textContent)

const question = [
    'If a triangle has angles 1350, 150, 300. Is it an obtuse triangle?',
    'If a triangle has angles 1150, 250, 400. Is it an acute triangle?',
    'If a triangle has angles 900, 600, 300. Is it a right angle triangle?',
    'A triangle has angles 600, 600, 600. Is it an equilateral triangle?',
    'If a triangle has angles 250, 750, 800. Is it an acute triangle?',
    'If a triangle has 2 sides with equal lengths and 750 angle between them. What is the type of triangle?',
    'If a triangle has 2 angles of 750. What is the measure of third angle in degree?',
    'If a triangle has 2 sides with equal lengths and 600 angle between them. What is the type of triangle?',
    'The perimeter of an equilateral triangle is 15cm. What is the length of one side?',
    'If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?'
]
const questionWdanswer = [
    {
        question: 'If a triangle has angles 1350, 150, 300. Is it an obtuse triangle?',
        choice: {
            a: "yes",
            b: "no"
        },
        answer: 'a'

    },
    {
        question: 'If a triangle has angles 1150, 250, 400. Is it an acute triangle?',
        choice: {
            a: "yes",
            b: "no"
        },
        answer: 'a'
    },
    {
        question: 'If a triangle has angles 900, 600, 300. Is it a right angle triangle?',
        choice: {
            a: "yes",
            b: "no"
        },
        answer: 'a'
    },
    {
        question: 'A triangle has angles 600, 600, 600. Is it an equilateral triangle?',
        choice: {
            a: "yes",
            b: "no"
        },
        answer: 'a'
    },
    {
        question: 'If a triangle has angles 250, 750, 800. Is it an acute triangle?',
        choice: {
            a: "yes",
            b: "no"
        },
        answer: 'a'
    },
    {
        question: 'If a triangle has 2 sides with equal lengths and 750 angle between them. What is the type of triangle?',
        choice: {
            a: "yes",
            b: "no"
        },
        answer: 'a'
    },
    {
        question: 'If a triangle has 2 angles of 750. What is the measure of third angle in degree?',
        choice: {
            a: "yes",
            b: "no"
        },
        answer: 'a'
    },
    {
        question: 'If a triangle has 2 sides with equal lengths and 600 angle between them. What is the type of triangle?',
        choice: {
            a: "yes",
            b: "no"
        },
        answer: 'a'
    },
    {
        question: 'The perimeter of an equilateral triangle is 15cm. What is the length of one side?',
        choice: {
            a: "yes",
            b: "no"
        },
        answer: 'a'
    },
    {
        question: 'If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?',
        choice: {
            a: "yes",
            b: "no"
        },
        answer: 'a'
    }
]

const multipleChoice = [
    ["yes", "no"],
    ["yes", "no"],
    ["yes", "no"],
    ["yes", "no"],
    ["yes", "no"],
    ["Equilateral", "Isosceles", "Right Angle traingle"],
    ["25", "30", "15"],
    ["Equilateral", "Isosceles", "Both"],
    ["15cm", "45cm", "5cm"],
    ["Equilateral", "Isosceles", "Scalene"]
]
// multipleChoice.map((e, i) => Object.keys(e).flat()).map((e, i) => console.log(multipleChoice[i]))
// question.forEach(e => console.log(e))
const main = document.getElementById('main');
main.innerHTML = ''
// for (let ques of questionWdanswer) {
const movieEl = document.createElement('fieldset');
let output = [];

for (let i = 0; i < questionWdanswer.length; i++) {
    console.log
    let answer = []
    for (let j in questionWdanswer[i].choice) {
        answer.push(
            `<label>
            <input type=radio name=question + ${i}  value = ${j}>
         ${questionWdanswer[i].choice[j]}</label>`
        )
    }
    console.log(answer)
    output.push(`
        <legend>${questionWdanswer[i].question}</legend>
        ${output.join("")}
        `)
}
// console.log(output)
// output.forEach(element => {
//     movieEl.innerHTML += element;
// })
// movieEl.innerHTML = `
//     <legend>${ques.question}</legend>
//     <input type="checkbox" name="favorite_pet" value="Cats">Cats<br>
//     <br>

// `
main.appendChild(movieEl)
// }