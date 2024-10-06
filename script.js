const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const userHand = document.querySelector('.user-hand .hand-icon');
const computerHand = document.querySelector('.computer-hand .hand-icon');
const result = document.querySelector('.result')
let userScore = document.querySelector('.user-score')
let computerScore = document.querySelector('.computer-score')
let restBtn = document.querySelector('.rest-btn');
restBtn.addEventListener('click',()=>{
    userScoreCount = 0;
    computerScoreCount = 0;
    userScore.innerText = userScoreCount;
    computerScore.innerText = computerScoreCount;
})

const handEmoji = ['✊','✋','✌️'];
let userScoreCount = 0;
let computerScoreCount = 0;

rockBtn.addEventListener('click',() =>{
    resultEngin(handEmoji[0],handEmoji[2])
    
})
paperBtn.addEventListener('click',() =>{
    resultEngin(handEmoji[1],handEmoji[0])
})
scissorsBtn.addEventListener('click',() =>{
    resultEngin(handEmoji[2],handEmoji[1])
})

function resultEngin(userhand,winIcon){
    userHand.innerText = '🤜'
    userHand.classList.add('shakeUserHands')
    computerHand.classList.add('shakeComputerHands');
    computerHand.innerText = '🤛'
    result.innerText = ''
    setTimeout(() =>{
        let mathEq =  Math.floor(Math.random() * 3)
    userHand.classList.remove('shakeUserHands')
    computerHand.classList.remove('shakeComputerHands')
    computerHand.innerText = handEmoji[mathEq]
    if(userhand === handEmoji[mathEq]){
        result.innerText = 'match drow !!'

    } else if(handEmoji[mathEq] === winIcon){
        result.innerText = 'You Won !!'
        ++userScoreCount;
        userScore.innerText = userScoreCount;
        
    } else{
        result.innerText = 'computer Won !!'
        ++computerScoreCount;
        computerScore.innerText = computerScoreCount;
    }
    userHand.innerText = userhand;
    },1500)
}