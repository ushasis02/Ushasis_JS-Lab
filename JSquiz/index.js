class Quiz{
    constructor(questions){
        this.score =0;
        this.questions = questions;
        this.index=0;
    }

    getQuestionByIndex() {
        return this.questions[this.index];
    }

    checkForCorrectAnswer(answer){
        let question = this.getQuestionByIndex();
        if(question.isCorrectAnswer(answer)){
            this.score++;
            }
        this.index++;
    }

    isEnded() {
        return this.index === this.questions.length;
    }
}

class Question{
    constructor (questionText, choices, answer){
        this.text = questionText;
        this.choices=choices;
        this.answer = answer;
    }

    isCorrectAnswer(selectedChoice){
        return this.answer===selectedChoice;
    }
}

let questions = [
        new Question("Who is the Prime Minister of India?", ["Indira Gandhi", "Rahul Gandhi","Narendra Modi", "Manmohan Singh"], 
                        "Narendra Modi"),
        new Question("Java Script was first used in?", ["Netflix", "Netscape","Internet Explorer", "Chrome"], 
                        "Netscape"),
        new Question("What is the smallest coutry in Earth?", ["Vatican City", "India","Mauritus", "Madagascar"], 
                        "Vatican City"),    
        new Question("Who is the president of US?", ["Joe Biden", "Kamala Harris","Obama", "George Bush"], 
                        "Joe Biden"),  
        new Question("What is Amazon's Cloud Services called?", ["GCS", "AWS","Azure", ".Net"], 
                        "AWS"),    
        new Question("Who acquired Great Learning?", ["Byju's", "Unacademy","Cloudera", "Google"], 
                        "Byju's"), 
        new Question("What is the capital of Karnataka?", ["Bangalore", "Calcutta", "Chennai", "Mumbai"], 
                        "Bangalore"),
        new Question("Who hosts KBC?", ["Shahrukh khan", "Amitabh Bachchan", "Salman Khan", "Akshay Kumar"], 
                        "Amitabh Bachchan"),
    ];

function loadQuestions(){
    if(quiz.isEnded()){
        showFinalScores();
        return;
    }    

    let currentQuestion = quiz.getQuestionByIndex();
    let questionElement = document.getElementById("question");
    questionElement.innerHTML=currentQuestion.text;

    let displayedChoices = currentQuestion.choices;
    for(let i=0; i<displayedChoices.length; i++){
        let eachChoiceElement = document.getElementById("choice"+i);
        eachChoiceElement.innerHTML=displayedChoices[i];

        let eachChoiceBtn = document.getElementById("btn"+i);
        eachChoiceBtn.onclick = function(){
            quiz.checkForCorrectAnswer(displayedChoices[i]);
            loadQuestions();
        };
    }
    showProgress();
}

let quiz = new Quiz(questions);
loadQuestions();

function showFinalScores(){
    let resPercent = (quiz.score / questions.length)*100;
    let scoresHTML =`
        <h1>Results ......</h1>
        <h1 id = 'score'>Your Score is : ${quiz.score}</h1>
        <h2> And overall percentage is : ${resPercent}%</h2>
        <h1> Congrats !! </h1>`;
    let quizCanvas = document.getElementById("quiz");
    quizCanvas.innerHTML=scoresHTML;
    }

function showProgress(){
    let questionNumber = quiz.index + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${questionNumber} of ${quiz.questions.length}`;
}