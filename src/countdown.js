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