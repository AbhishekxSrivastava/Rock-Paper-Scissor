let score = JSON.parse(localStorage.getItem("score")) ||
            {
                win: 0,
                tie: 0,
                lose: 0
            };

// if(!score) {
//     score = {
//         win: 0,
//         tie: 0,
//         lose: 0
//     };
// }

updateScore();


function playGame(playerMove) {
    let ComputerValue = pickComputerMove();

    let Result = '';

    if(playerMove === 'Rock') {
        if(ComputerValue === 'Scissor') {
            Result = 'You Won';
        }
        else if(ComputerValue === 'Rock') {
            Result = 'It\'s a tie';
        }
        else if(ComputerValue === 'Paper') {
            Result = 'You Lose';
        }
    }

    if(playerMove === 'Paper') {
        if(ComputerValue === 'Rock') {
            Result = 'You Won';
        }
        else if(ComputerValue === 'Paper') {
            Result = 'It\'s a tie';
        }
        else if(ComputerValue === 'Scissor') {
            Result = 'You Lose';
        }
    }

    if(playerMove === 'Scissor') {
        if(ComputerValue === 'Paper') {
            Result = 'You Won';
        }
        else if(ComputerValue === 'Scissor') {
            Result = 'It\'s a tie';
        }
        else if(ComputerValue === 'Rock') {
            Result = 'You Lose';
        }
    }

    if(Result === 'You Won') {
        score.win += 1;
    }
    else if(Result === 'It\'s a tie') {
        score.tie += 1;
    }
    else if(Result === 'You Lose') {
        score.lose += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result')
        .innerHTML = Result;

    document.querySelector('.js-moves')
        .innerHTML = `            You
             <img src = 'images/${playerMove}-emoji.png' class = 'move-icon'> 
             <img src = 'images/${ComputerValue}-emoji.png' class = 'move-icon'>
            Computer`;
        
    // alert(`You picked ${playerMove}, Computer picked ${ComputerValue}, ${Result} .
    //     Won :${score.win} , Tie :${score.tie} , Losses :${score.lose}`);
}


function updateScore() {
    document.querySelector(".js-score")
    .innerHTML = `Won :${score.win} , Tie :${score.tie} , Losses :${score.lose}`;
}


function pickComputerMove() {
    const randNum1 = Math.random();

    let ComputerValue;
    if(randNum1 >= 0 && randNum1 < 1/3) {
        ComputerValue = 'Rock';
    }
    else if(randNum1 >= 1/3 && randNum1 < 2/3) {
        ComputerValue = 'Paper';
    }
    else if(randNum1 >= 2/3 && randNum1 < 1) {
        ComputerValue = 'Scissor';
    }

    return ComputerValue;
}





