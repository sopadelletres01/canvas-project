export class Countdown{
    constructor(cb,timer){
        this.start(cb,timer)
    }
    start(cb,timeLeft){
        const progressBar = document.getElementById("progressBar")
        const countdown = document.getElementById("countdown")
        let counter = 1;
        let downloadTimer = setInterval(function(){
            console.debug(timeLeft)
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