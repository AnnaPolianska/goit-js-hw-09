const refs = {
    startButton: document.querySelector('[data-start]'),
    stopButton: document.querySelector('[data-stop]'),
  };
 

let timerId = null;
 refs.startButton.addEventListener('click' , onStartFunction)

 function onStartFunction(){
 refs.stopButton.addEventListener('click' , onStopFunction)
 refs.startButton.disabled = true ;
 timerId = setInterval(changeBackgroundFn, 1000)
 }

 function onStopFunction(){
    refs.startButton.disabled = false;
    refs.stopButton.removeEventListener('click', onStopFunction);
    clearInterval(timerId);
 }

 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

function changeBackgroundFn(){
    document.body.style.backgroundColor = getRandomHexColor()
}