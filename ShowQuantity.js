let Won = 0;
let Loss = 0;
let Tie = 0;
document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){
        playGame('rock');
    }
    else if(event.key==='p'){
        playGame('paper');
    }
    else if(event.key==='s'){
        playGame('scissor');
    }
})

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    const computerRandom = choices[Math.floor(Math.random() * 3)];
    
    if (playerChoice === computerRandom) {
        document.getElementById('result').textContent = 'The Match is a Tie!';
        Tie++;
    } 
    else if (
        (playerChoice === 'rock' && computerRandom === 'scissor') ||
        (playerChoice === 'paper' && computerRandom === 'rock') ||
        (playerChoice === 'scissor' && computerRandom === 'paper')
    ) {
        document.getElementById('result').textContent = 'YOU WON! 🎉';
        Won++;
    } 
    else {
        document.getElementById('result').textContent = 'YOU LOSE! 😢';
        Loss++;
    }

    
    document.getElementById('matter').innerHTML = `
        Your Choice: <img src="${playerChoice}.jpeg" alt="${playerChoice}"> 
        Computer Choice: <img src="${computerRandom}.jpeg" alt="${computerRandom}">
    `;

    Stats(); 
}

function Stats() {
    document.getElementById('output').textContent = 
        `Won: ${Won} | Loss: ${Loss} | Tie: ${Tie}`;
}
function reset(){
    Won=0;
    Loss=0;
    Tie=0;
    Stats();
}
let isAutoPlaying = false;
let IntervalID;

function autoplay() {
    const choices = ['rock', 'paper', 'scissor']; 
    const autoPlayButton = document.querySelector('.AutoPlay-button');

    if (!isAutoPlaying) {
        IntervalID = setInterval(function() {
            const playerMove = choices[Math.floor(Math.random() * 3)];
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
        autoPlayButton.textContent = 'Stop';
    } else {
        clearInterval(IntervalID);
        isAutoPlaying = false;
        autoPlayButton.textContent = 'AutoPlay';
    }
}