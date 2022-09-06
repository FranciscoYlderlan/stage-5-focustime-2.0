import { components } from "./components.js";
import {sound} from "./sounds.js"


let statusPaused = true;

let timerTimeOut;

let timeDefaut = {"minutes": 25, "seconds": 0};

components.input.minutes.max

sound.music.loop = true;

let btnTheme = components.button.theme;

let btnPlay = components.button.play;
let btnPause = components.button.pause;

let btnIncrease = components.button.increase;
let btnDecrease = components.button.decrease;




function countdown () {
    components.input.update(components.display.minutes.innerText, components.display.seconds.innerText);
    let reset = components.display.minutes.innerText == "00" && components.display.seconds.innerText == "00"
    timerTimeOut = setTimeout(function () {
        
        if(reset){
            sound.kitchenTimer.play();
            components.input.update(timeDefaut.minutes,timeDefaut.seconds);
            return
        };

        if(components.display.seconds.innerText == 0){
            components.display.update(components.display.minutes.innerText,60);
            components.display.minutes.innerText--;
            
        };

        components.display.seconds.innerText--;        

        countdown()
    },1000)


}

function increaseMinutes (value) {
    let minutes = components.display.minutes.innerText;
    let sum = Number(minutes) + Number(value);
    if(sum > 60) {
        return 60;
    }1

    return sum ; 
}

function decreaseMinutes (value) {
    let minutes = components.display.minutes.innerText;
    let diff = Number(minutes) - Number(value) 
    if(diff < 0) {
        return 0;
    }

    return diff;
}

components.input.update(timeDefaut.minutes,timeDefaut.seconds);


components.display.minutes.addEventListener("click",function () {

    statusPaused = true;

    sound.btnPress.play();

    clearTimeout(timerTimeOut);

    components.enableInput();    
});
components.display.seconds.addEventListener("click",function () {

    statusPaused = true;
    
    sound.btnPress.play();

    clearTimeout(timerTimeOut);
    
    components.enableInput();
});



btnPlay.addEventListener("click",function (event) {
    event.preventDefault();
    
    sound.btnPress.play();

    components.disableInput();
    
    components.display.update(components.input.minutes.value, components.input.seconds.value);

    if(statusPaused){
        statusPaused = false;
        countdown();
    }
   
    components.disableInput();
});


btnPause.addEventListener("click",function (event) {
    event.preventDefault();

    statusPaused = true;
    
    sound.btnPress.play();

    clearTimeout(timerTimeOut)

    components.enableInput();

});

btnIncrease.addEventListener("click", function (event){
    event.preventDefault();
    
    let increasedMinutes = increaseMinutes(5)
    
    components.input.update(increasedMinutes, components.display.seconds.innerText);
    components.display.update(components.display.minutes.innerText,components.display.seconds.innerText);
    components.input.validated();
    sound.btnPress.play();
})

btnDecrease.addEventListener("click", function (event){
    event.preventDefault();
    let decreasedMinutes = decreaseMinutes(5)

    components.input.update(decreasedMinutes, components.display.seconds.innerText);
    components.display.update(components.display.minutes.innerText,components.display.seconds.innerText);
    components.input.validated();
    sound.btnPress.play();
})

btnTheme.addEventListener("click", function (event) {
    event.preventDefault();

    components.button.changeTheme();
    sound.btnPress.play();
});


