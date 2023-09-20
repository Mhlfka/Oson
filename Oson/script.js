const questions = [
    {
        question: "Payg'ambarimiz Muhammad Mustafo (s.a.v) nechanchi yilda tavallud topganlar?",
        answers:[
            {text: "milodiy 571",  correct: true},
            {text: "milodiy 475",  correct: false},
            {text: "milodiy 559",  correct: false},
            {text: "milodiy 577",  correct: false},
        
        ]
    },
    {
        question: "Payg'ambarimizning otalarining ismlari",
        answers:[
            {text: "Anas ibn Abdulmutallib",  correct: false},
            {text: "Xamza ibn Abdulmutallib",  correct: false},
            {text: "Abu Tolib",  correct: false},
            {text: "Abdulloh ibn Abdulmutallib",  correct: true},
        ]
    },
    {
        question: "Payg'ambarimizga necha yoshlarida vahiy kela boshlagan",
        answers:[
            {text: "40 ",  correct: true},
            {text: "45 ",  correct: false},
            {text: "25 ",  correct: false},
            {text: "25",  correct: false},
        ]
    },
    {
        question: "Payg'ambarimiz Hadicha onamizga uylanganlarida necha yoshda edilar?",
        answers:[
            {text: "30",  correct: false},
            {text: "25",  correct: true},
            {text: "20",  correct: false},
            {text: "18",  correct: false},
        ]
    },
    {
        question: "Payg'ambarimizga birinchi tushgan oyat qaysi suradan edi?",
        answers:[
            {text: "Fotiha surasi",  correct: false},
            {text: "Kavsar surasi",  correct: false},
            {text: "Alaq surasi",  correct: true},
            {text: "Ihlos surasi",  correct: false},
        ]
    },
    {
        question: "Payg'ambarimizning onalarini ismlari",
        answers:[
            {text: "Omina",  correct: true},
            {text: "Halima",  correct: false},
            {text: "Oisha",  correct: false},
            {text: "Rayhona",  correct: false},
        ]
    },
    {
        question: "Asharayi mubashshara nima?",
        answers:[
            {text: "Jannat xabarini olgan 10 tobe'in",  correct: false},
            {text: "Jannat xabarini olgan 10 tab'a-tobe'in",  correct: false},
            {text: "Jannat xabarini olgan 10 sahoba",  correct: true},
            {text: "Quro'nda zikri kelgan Payg'ambarlar",  correct: false},
        ]
    },
    {
        question: "Payg'ambarimiz (s.a.v)ning yoshliklarida Muhammad Amin nomini olgan edilar. U nom nimani anglatadi?",
        answers:[
            {text: "Ishonchli/Rostgo'y",  correct: true},
            {text: "Baquvvat",  correct: false},
            {text: "Kelishgan",  correct: false},
            {text: "Tirishqoq",  correct: false},
        ]
    },
    {
        question: "Payg'ambarimizning ismlarining ma'nosi nima? ",
        answers:[
            {text: "Dono, Donishmand",  correct: false},
            {text: "Baquvvat, Kuchli",  correct: false},
            {text: "Maqtovga, olqishga sazovor",  correct: true},
            {text: "Kelishgan,Suyukli",  correct: false},
        ]
    },
    {
        question: "Onalari olamdan utganidan so'ng Payg'ambarimizni kim tarbiya qildi?",
        answers:[
            {text: "Amakilari Xamza",  correct: false},
            {text: "Bobolari Abdulmutallib",  correct: true},
            {text: "Amakilari Abu Tolib",  correct: false},
            {text: "Emizkli onalari Halima",  correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    showQuestion(); 
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    }); 
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect =  selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";    
}
function showScore() {
    resetState();
    questionElement.innerHTML = `Siz ${questions.length} savoldan ${score} tasini topdingiz!`;
    nextButton.innerHTML = "Yana";
    nextButton.style.display = "block";
    showIzoh();


    if (score == 0) {
        alert("Sizga birdan-bir maslahat: Kuproq urganing!")
    }else if (score == 1){
        alert("Sizga birdan-bir maslahat: Kuproq urganing!")
    }else if (score == 2){
        alert("Sizga birdan-bir maslahat: Kuproq urganing!")
    }else if (score == 3){
        alert("Ilm olishda bardavom bo'ling")
    }else if (score == 4){
        alert("Ilm olishda bardavom bo'ling")
    }else if (score == 5){
        alert("Ilm olishda bardavom bo'ling")
    }else if(score == 6){
        alert("Yaxshi, lekin ilm olishdan tuxtamang")
    }else if(score == 7){
        alert("Yaxshi, lekin ilm olishdan tuxtamang")
    }else if(score == 8){
        alert("Yaxshi, lekin ilm olishdan tuxtamang")
    }else if(score == 10){
        alert("Sizga Barakalla deymiz!")
    }else if(score == 10){
        alert("Sizga Barakalla deymiz!")
    }
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(); 
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();




