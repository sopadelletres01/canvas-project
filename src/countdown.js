export class Countdown{
    constructor(cb,timer){
        this.start(cb,timer)
        this.container = document.getElementById("countdownWrapper")
    }
    start(cb,timeLeft){
        const progressBar = document.getElementById("progressBar")
        const countdown = document.getElementById("countdown")
        let counter = 1;
        let downloadTimer = setInterval(function(){
          console.log(progressBar.max/2)
            if( timeLeft === (progressBar.max / 2)){
              let randomAudio = document.getElementById("escalated")
              randomAudio.play()
              let alertElem = document.getElementById("alert")
              alertElem.style.display = "block"
              setTimeout(()=>{
                alertElem.style.display = "none"
              },5000)

            }
            if(timeLeft <= 0){
              clearInterval(downloadTimer);
              cb()
            }
            progressBar.value = progressBar.max - timeLeft;
            countdown.innerHTML = progressBar.max - counter
            timeLeft -= 1;
            counter ++
          }, 1000);
    }
}