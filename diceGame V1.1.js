var dice, score, roundScore, currentPlayer, maxValue, firstSix;

init();
alert('Game Instructions: ' +

    '1. Game is for 20 points. Whichever players collect 20 points first will be the winner. ' +
    '2. Game start with player 1 and than players have to roll dice and will get numbers on the dice. ' +
    '3. Players can click roll  dice multiple time to collect more points but at any point dice rolls to one than all the points becoms zero in current score. ' +
    '4. Players can save their current point in Main score mentioned beneaths player name by pressing hold button and that score cant be zero. ' +
    '5. Player who save or hold twenty points first will bw the winner. ' +
    '6. For playing again click on new game. ' +
    '7. Player who will roll dice for two sixes in a row will loose current score and turn will move to next player. ');


//document.querySelector('#current-' + currentPlayer).innerHTML = '<em>' + dice + '</em> '; // to write charcters etc here.
// to onle read the value ( not assigning like above) by querySelector and store it in variable.
/* var x = document.querySelector('#score-0').textContent;
 console.log(x); */



document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.querySelector('.btn-roll').style.display = 'block';
document.querySelector('.btn-hold').style.display = 'block';
document.querySelector('.btn-set-value').style.display = 'block';
document.querySelector('.input-value').style.display = 'block';
document.querySelector('.dice1').style.display = 'none';





// callback function btn function call in another function.
document.querySelector('.btn-roll').addEventListener('click', function() {
    dice = Math.floor(Math.random() * 6 + 1);
    //dice = 6; // to check the firstsix if statement
    document.querySelector('.dice1').style.display = 'block';
    document.querySelector('.dice1').src = 'dice' + dice + '.png';

    if (maxValue === undefined || maxValue === '0') {
        alert('Please set max point for this round');
        document.querySelector('.dice1').style.display = 'none';
    } else if (dice === 6 && firstSix === 6) { // if want to skip everytime when dice will be same two times in a row
        //use (dice === firstSix)
        //console.log('right'); // console to check the working of the code
        currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.panel0').classList.toggle('active');
        document.querySelector('.panel1').classList.toggle('active');
        document.querySelector('.dice1').style.display = 'none';
        alert('Two Sixes!! ' + 'Player ' + (currentPlayer + 1) + ' Turn');

    } else if (dice !== 1) {
        //   document.querySelector('#current-' + currentPlayer).textContent = dice;
        roundScore += dice;
        document.querySelector('#current-' + currentPlayer).textContent = roundScore;

    } // console.log(dice);
    else {
        currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.panel0').classList.toggle('active');
        document.querySelector('.panel1').classList.toggle('active');
        document.querySelector('.dice1').style.display = 'none';
    }

    firstSix = dice;
} /* -----> anonymous function  */ );


document.querySelector('.btn-set-value').addEventListener('click', function() {
    maxValue = document.querySelector('.input-value').value;

    if (maxValue === '') {
        alert('Max point field cant\' be empty !!');
        return;
    } else if (maxValue === '0') {
        alert('Max point cant\' be 0');
        return;

    } else {
        alert('Start game for: ' + maxValue + ' points.');
        document.querySelector('.input-value').style.display = 'none';
        document.querySelector('.btn-set-value').style.display = 'none';
    }
    //return maxValue;
});




function init() {
    score = [0, 0];
    roundScore = 0;
    currentPlayer = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.input-value').style.display = 'block';
    document.querySelector('.btn-set-value').style.display = 'block';
    document.querySelector('.panel0').classList.add('active');
    document.querySelector('.panel1').classList.remove('active');
    document.querySelector('#name-0').classList.remove('winner1');
    document.querySelector('#name-1').classList.remove('winner1');
    document.querySelector('#score-0').classList.remove('winner1');
    document.querySelector('#score-1').classList.remove('winner1');





    maxValue = undefined;
    document.querySelector('.btn-hold').addEventListener('click', function() {
        score[currentPlayer] += roundScore;
        document.querySelector('#score-' + currentPlayer).textContent = score[currentPlayer];


        if (score[currentPlayer] >= maxValue) {
            //  console.log('winner');
            document.querySelector('#name-' + currentPlayer).textContent = 'Winner!';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.btn-roll').style.display = 'none';
            document.querySelector('.btn-hold').style.display = 'none';
            document.querySelector('.panel' + currentPlayer).classList.remove('active');
            document.querySelector('#name-' + currentPlayer).classList.add('winner1');
            document.querySelector('#score-' + currentPlayer).classList.add('winner1');


        } else {
            currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
            roundScore = 0;
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            document.querySelector('.panel0').classList.toggle('active');
            document.querySelector('.panel1').classList.toggle('active');
            document.querySelector('.dice1').style.display = 'none';

        }
    });

};

// document.querySelector('.btn-new').addEventListener('click', function() {
//     currentPlayer = 0;
//     roundScore = 0;

//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';
//     document.querySelector('.panel0').classList.toggle('active');
//     document.querySelector('.panel1').classList.toggle('active');
//     //  document.querySelector('.dice1').style.display = 'block';
//     document.querySelector('.btn-roll').style.display = 'block';
//     document.querySelector('.btn-hold').style.display = 'block';
// });
// alternate method ( usefull in very small apps and game)

document.querySelector('.btn-new').addEventListener('click', init);