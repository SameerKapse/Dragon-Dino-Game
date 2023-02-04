score = 0;
cross = true;
var audio = new Audio('./music.mp3');
var audio2 = new  Audio('./gameo.mp3');

setTimeout(()=>{
    audio.play()
},1000);

document.onkeydown=function(e){
    console.log("Key Code is",e.keyCode)
    if (e.keyCode==38) {
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino'); 
        }, 700);
    }
    if (e.keyCode==39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left')) ;
        dino.style.left=(dinoX + 112) + "px" 
    }
    if (e.keyCode==37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left')) ;
        dino.style.left=(dinoX - 112) + "px" 
    }

}

setInterval(()=>{
    dino = querySelector('.dino')
    gameOver = querySelector('.gameOver')
    obstacle =  querySelector('.obstacle')

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top')) ;
   
    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left')) ;
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left')) ;

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    if (offsetX<73 && offsetY<52) {
        gameOver.innerHtml = "Game Over Please it again!!!"
        obstacleAni.classList.remove('obstacleAni')
        audio2.play();
        setTimeout(()=>{
            audio.pause();
            audio2.pause();
        },1000);
    }
    else if(offsetX<145&& cross){
        score +=1;
        updateScore(score);
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(()=>{
           aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur = aniDur-0.1 ; 
            obstacle.style.animationduration= newDur + 's';
            console.log('New Animation duration',newDur)
        },500);
    }
},10)

function updateScore(score) {
    ServiceWorkerContainer.innerHtml = "Your Score : "+ score
}