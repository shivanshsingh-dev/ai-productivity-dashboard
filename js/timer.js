let totalSeconds = 25 * 60;

let timer = null;

function updateDisplay(){

    const min = Math.floor(totalSeconds / 60);

    const sec = totalSeconds % 60;

    document.getElementById("focusTime").textContent =
    `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

}

function startTimer(){

    if(timer) return;

    timer = setInterval(()=>{

        if(totalSeconds>0){

            totalSeconds--;

            updateDisplay();

        }else{

            clearInterval(timer);

            timer=null;

            alert("🎉 Focus Session Completed!");

        }

    },1000);

}

function pauseTimer(){

    clearInterval(timer);

    timer=null;

}

function resetTimer(){

    pauseTimer();

    totalSeconds=25*60;

    updateDisplay();

}

updateDisplay();