score = 0;
cross = true;

audio = new Audio('backmu.mp3');
audiogo = new Audio('gameov.mp3')
setTimeout(() =>{
    audio.play();
}, 1000)
document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode==38){
        astro = document.querySelector('.astro');
        astro.classList.add('animateAstro');
        setTimeout(() => {
            astro.classList.remove('animateAstro')
        }, 800);
    }
if(e.keyCode==39){
    astro = document.querySelector('.astro');
    astroX  = parseInt(window.getComputedStyle(astro,null).getPropertyValue('left'));
    astro.style.left = astroX + 112 + "px";
}
if(e.keyCode==37){
    astro = document.querySelector('.astro');
    astroX  = parseInt(window.getComputedStyle(astro,null).getPropertyValue('left'));
    astro.style.left = astroX - 112 + "px";
}

}
setInterval(() => {
astro = document.querySelector('.astro');
gameOver = document.querySelector('.gameOver');
obstacle = document.querySelector('.obstacle');

ax = parseInt(window.getComputedStyle(astro,null).getPropertyValue('left'));
ay = parseInt(window.getComputedStyle(astro, null).getPropertyValue('top'));
 
ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

offsetX = Math.abs(ax-ox);
offsetY = Math.abs(ay-oy);
//console.log(offsetX, offsetY)
if(offsetX< 73 && offsetY<52){
    gameOver.innerHTML = "Game-Over - Reload to Play Again";
    obstacle.classList.remove('obstacleAni')
    audiogo.play();
    setTimeout(()=>{
        audio.pause();
    }, 100)
}

else if(offsetX<145 && cross){
    score+=1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
        cross = true;
    }, 1000);
    setTimeout(() =>{
    aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
    newDur = aniDur - 0.1;
    obstacle.style.animationDuration = newDur + 's';
    console.log('new animation duration: ', newDur)
    }, 500);
}
}, 10);
 function updateScore(score){
  scoreCont.innerHTML = "Your Score: "+ score
 }