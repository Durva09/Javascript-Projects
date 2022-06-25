const holes=document.querySelectorAll('.hole');
const scoreboard=document.querySelector('.score');
const moles=document.querySelectorAll('.mole');

let score=0;
let timeUp=false;
let lastHole;

function startGame()
{
  score=0;
  timeUp=false;
  scoreboard.textContent=0;
  peep();
  setTimeout(function(){scoreboard.textContent='Game Over';
                   timeUp = true},10000);
}

function randomHole(holes)
{
    let idx=Math.floor(Math.random() * holes.length);
    let hole=holes[idx];
    if(hole===lastHole)
    {
        console.log('same hole');
        return randomHole(holes);
    }
    lastHole=hole;
    return hole;
}

function randomTime(max,min)
{
    return Math.round(Math.random() * (max-min) + min);
}


function peep()
{
    let time=randomTime(1000,200);
    const hole=randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp)
    {
        peep();
    }
},time);
}


function bonk(e)
{
    if(!e.isTrusted)
    {
        return;
    }
    score++;
    this.parentNode.classList.remove('up');
    scoreboard.textContent=score;
}

moles.forEach(mole => mole.addEventListener('click',bonk));