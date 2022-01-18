
document.getElementById('fontOps').onchange = fontsize;
document.getElementById('animation').onchange = animation;
document.getElementById('start').onclick = startAnimationBtn;
document.getElementById('stop').onclick = stopAnimationBtn;
document.getElementById('turbo').onclick = speedUpTurbo;

let animationArray = [];
let animationIntervalID;
let speed = 250;

toggleButtons("initial"); 
function fontsize() {
    const size = this.value;
    const textArea = document.getElementById("text");
    textArea.style.fontSize = parseInt(size) + 'pt';
}
function animation() {
    const target = this.value;
    const textArea = document.getElementById("text");
    if(target !== "Blank"){
        animationArray = Animation[target].split("=====\n");
        toggleButtons('stop');
    }else{
        toggleButtons("initial");
    }

}

function startAnimationBtn() {
    toggleButtons('start');
    const textArea = document.getElementById("text");
    let i =0;
    animationIntervalID = setInterval(function () {
        if (i < animationArray.length){
            textArea.textContent = animationArray[i];
        }else{
            i=0;
            textArea.textContent = animationArray[i];
        }
        i++;
    },speed);
}

function stopAnimationBtn() {
    toggleButtons('stop');
    clearInterval(animationIntervalID);
}

function speedUpTurbo(){

    if (this.checked === true){
        clearInterval(animationIntervalID);
        speed = 50;
        startAnimationBtn();
    }else{
        clearInterval(animationIntervalID);
        speed = 250;
        startAnimationBtn();
    }
}

function toggleButtons(clickedButton) {
    const stop = document.getElementById("stop");
    const start = document.getElementById("start");

    if (clickedButton === 'start'){
        stop.disabled = false;
        start.disabled = true;
    }else if (clickedButton == 'stop'){
        start.disabled = false;
        stop.disabled = true;
    }else{
        start.disabled = true;
        stop.disabled = true;
    }
}

