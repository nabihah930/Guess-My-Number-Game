'use strict';

// document.querySelector('.guess').value = 3;
let my_number = Math.trunc(Math.random()*20)+1;
console.log(my_number);
let high_score = 0, score = 20;

document.querySelector('.check').addEventListener('click',function(){
    const input_guess = Number(document.querySelector('.guess').value);
    console.log(input_guess);
    if (!input_guess){
        document.querySelector('.message').textContent = "No number input!";
        console.log("No input detected!");
    }
    else{
        if(input_guess===my_number){
            document.querySelector('.message').textContent = "Correct!🎉🎊";
            if(score>=high_score)
                high_score = score;
            document.querySelector('.highscore').textContent = high_score;
            document.querySelector('body').style.backgroundColor = '#9acd32';
            document.querySelector('.number').textContent = input_guess;
        }
        else{
            if(score>1){
                score--;
                document.querySelector('.message').textContent = input_guess > my_number ? "Guess was too high ❗": "Guess was too low ❗";
                document.querySelector('body').style.backgroundColor = input_guess > my_number ? 'red' : 'blue';
                document.querySelector('.score').textContent = score;
            }
            else{
                document.querySelector('.message').textContent = "You lost the game 😲";
                document.querySelector('.score').textContent = 0; 
            }
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    my_number = Math.trunc(Math.random()*20)+1;
    console.log(my_number);
    score = 20;
    //location.reload();                                                //This simply reloads the page->Works perfectly fine
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});