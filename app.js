const questions = [
    {
        title: 'question 1',
        trueAnswer: 'answer1',
        variants: ['answer', 'answer2', 'answer3'],
    },

    {
        title: 'question 2',
        trueAnswer: 'answer3',
        variants: ['answer1', 'answer2', 'answer3'],
    },


    {
        title: 'question 3',
        trueAnswer: 'answer6',
        variants: ['answer1', 'answer2', 'answer3'],
    },

    {
        title: 'question 4',
        trueAnswer: 'answer3',
        variants: ['answer1', 'answer2', 'answer3'],
    },

    {
        title: 'question 5',
        trueAnswer: 'answer4',
        variants: ['answer1', 'answer2', 'answer3'],
    },

    {
        title: 'question 6',
        trueAnswer: 'answer2',
        variants: ['answer1', 'answer2', 'answer3'],
    },
];

class QuestionGame {
    point = 0;
    nextQIndex = -1;
    qData = []
    currentQuestion=null;

    constructor(data) {
        this.qData = data
        this.point=0

    }
    updatePointDisplay() {
        const pointDisplay = document.querySelector('#pointDisplay');
        pointDisplay.innerText = `your point: ${this.point}`;
    }
    incrementPoint(){
        this.point+=10;
        this.updatePointDisplay();
    }


    nextQuestion() {
        if (this.nextQIndex === this.qData.length - 1) {
            console.log('Oyun bitti...');
            return false;
        } else {
            this.nextQIndex += 1;
            const questionItem = this.qData[this.nextQIndex];
            this.currentQuestion=questionItem
            return questionItem;
        }
    }





}
const qTitle=document.querySelector("#qTitle")
const btnGroup=document.querySelector("#btnGroup")
const pointDisplay=document.querySelector('#pointDisplay')



const gameQ = new QuestionGame(questions)


function startGame() {
    gameQ.nextQuestion()
    const qObj=gameQ.currentQuestion
    qTitle.innerHTML=qObj.title
    pointDisplay.innerHTML=`your point:${gameQ.point}`
    btnGroup.innerHTML=qObj.variants.map(item=>`
    <button class="btn btn-outline-light" onclick="selectItem('${item} ')">A.${item}</button>
    
    
    `
    ).join('');
    console.log(qObj)
}

startGame()


function selectItem(userChoose) {
    console.log(gameQ.currentQuestion);
    console.log(userChoose);

    const selectedAnswer = userChoose.trim();
    const correctAnswer = gameQ.currentQuestion.trueAnswer.trim();

    if (selectedAnswer === correctAnswer) {
        console.log("Correct answer");
        gameQ.incrementPoint();
        btnGroup.classList.add('correct');
    } else {
        console.log("Wrong answer");
        btnGroup.classList.add('wrong');
    }
    gameQ.updatePointDisplay();
    setTimeout(() => {
        btnGroup.classList.remove('correct', 'wrong');
        startGame();
    }, 1000);
}
