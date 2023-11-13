'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent =13;

document.querySelector('.score').textContent =10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random()*20)+1 ;

// let highScore = 0;
let score = 20;
let highscore = 0;

const displayMessage =function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener(
    'click', function(){
        const guess = Number(document.querySelector('.guess').value); 
        console.log(guess,typeof guess);

        //IF NOTHING IS ENTERED
    if(!guess){
        // document.querySelector('.message').textContent ='No number entered';
        displayMessage ('No number entered');
    }
//WHEN APLAYER WINS THE GAME
    else if(guess === secretNumber){
        // document.querySelector('.message').textContent ='🥳🥂 You guessed right';
        displayMessage('🥳🥂 You guessed right');

        document.querySelector('.number').textContent = secretNumber ;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '50rem';

    if(score > highscore){
        highscore = score ;
        document.querySelector('.highscore').textContent = highscore;
        }
    }
    ////WHEN THE GUESS IS WRONG
    else if(guess !== secretNumber){
        // if (score > 1) { document.querySelector('.message').textContent =guess > secretNumber ? ' 📈Your guess is too high' : '📉 Your guess is too low';
            displayMessage ( 
            guess > secretNumber ? ' 📈Your guess is too high' : '📉 Your guess is too low');
            score--;
            document.querySelector('.score').textContent = score;
    }
    else{
        // document.querySelector('.message').textContent ='You lost the game bruh!';
        displayMessage('You lost the game bruh!');
        document.querySelector('.score').textContent = 0;
    }
}
});

///IMPLEMENTING AGAIN FUNCTIONALITY 
document.querySelector('.again').addEventListener('click', function(){
    score =20;

    // document.querySelector('.message').textContent ='start guessing.............';
    displayMessage('start guessing.............') ;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20)+1 ;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

});




//     ///WHEN GUESS IS TOO HIGH
//     else if(guess > secretNumber){
//         if(score > 1){ 
//         document.querySelector('.message').textContent = ' 📈Your guess is too high';
//         score--;
//         document.querySelector('.score').textContent = score;
//         }
//         else{
//             document.querySelector('.message').textContent = 'You lost the game bruh!'
//             document.querySelector('.score').textContent = 0;
//         }
//     }

//     //WHEN GUESS IS TOO LOW
//     else if(guess < secretNumber){
        
//         if(score > 1){ 
//             document.querySelector('.message').textContent = '📉 Your guess is too low';
//             score--;
//             document.querySelector('.score').textContent = score;
//         }
//         else{
//             document.querySelector('.message').textContent = 'You lost the game bruh!'
//             document.querySelector('.score').textContent = 0;
            
//             };


// }});

