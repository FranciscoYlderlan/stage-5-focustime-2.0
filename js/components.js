import { sound } from "./sounds.js";


const button = {
    play: document.querySelector("#btnPlay"),
    pause: document.querySelector("#btnPause"),
    increase: document.querySelector("#btnIncrease"),
    decrease: document.querySelector("#btnDecrease"),
    theme: document.querySelector("#btnTheme"),
    sun: document.querySelector(".sun"),
    moon: document.querySelector(".moon"),

    
    toggleButtons(componentButtonA, componentButtonB) {
        componentButtonA.classList.toggle("hide");
        componentButtonB.classList.toggle("hide");
    },
    enable(buttonA,buttonB) {
        buttonA.classList.remove("hide");
        buttonB.classList.add("hide");
    },
    disable(ButtonA,ButtonB) {
        ButtonA.classList.add("hide");
        ButtonB.classList.remove("hide");
    },
    changeTheme(){
        this.sun.classList.toggle("hide");
        this.moon.classList.toggle("hide");

        this.toggleTheme();
    },
    change(component){
        component.classList.toggle("light");
        component.classList.toggle("dark");
    },
    toggleTheme(){
        let thmBody = document.querySelector("body");
        let thmMain = document.querySelector("main");
        let thmTimer = document.querySelector(".timer");
        let thmCard = document.querySelector(".cards");
        
        this.change(thmBody);
        this.change(thmMain);
        this.change(thmTimer);
        this.change(thmCard);
    }
}; 

const input = {
    wrapper: document.querySelector("form"),
    minutes: document.querySelector("form .minutes"),
    seconds: document.querySelector("form .seconds"),

    
    vlForest: document.querySelector(".cards #volForest"),
    vlClounds: document.querySelector(".cards  #volClounds"),
    vlCoffeeTea: document.querySelector(".cards #volCoffeeTea"),
    vlBonFire: document.querySelector(".cards #volBonFire"),

    changeVolume(soundElement,inputElement) {
        let volume = Number(inputElement.value)/100;
        sound.updateVolume(soundElement,volume);
    },
    
    update(minutes,seconds) {
        components.display.minutes.innerText = String(minutes).padStart(2,"0");
        components.display.seconds.innerText = String(seconds).padStart(2,"0");
        components.input.minutes.value = components.display.minutes.innerText;
        components.input.seconds.value = components.display.seconds.innerText;
    },

    validated() {
        if(components.input.minutes.value < 0) {
            components.input.minutes.value = 0;
        }
        if(components.input.seconds.value < 0) {
            components.input.seconds.value = 0;
        }
        if(components.input.seconds.value > 60) {
            components.input.seconds.value = 60;
        }
    }
};

const display = {
    wrapper: document.querySelector(".wrapper-display"),
    minutes: document.querySelector(".wrapper-display .time .minutes"),
    seconds: document.querySelector(".wrapper-display .time .seconds"),
        
    update(minutes,seconds) {
        components.display.minutes.innerText = String(minutes).padStart(2,"0");
        components.display.seconds.innerText = String(seconds).padStart(2,"0"); 
    },
};


const card = {
    forest: document.querySelector(".cards #forest"),
    clounds: document.querySelector(".cards  #clounds"),
    coffeeTea: document.querySelector(".cards #coffeeTea"),
    bonFire: document.querySelector(".cards #bonFire"),


    selected(card){
        sound.btnPress.play()
        switch (card) {
            case "forest":
                this.forest.classList.toggle("selected");
                sound.toggle(sound.forest);

                this.clounds.classList.remove("selected");
                sound.clounds.pause();

                this.coffeeTea.classList.remove("selected");
                sound.coffeeTea.pause();

                this.bonFire.classList.remove("selected");
                sound.bonFire.pause();

                break;
            case "clounds":
                this.clounds.classList.toggle("selected");
                sound.toggle(sound.clounds);
                
                this.coffeeTea.classList.remove("selected");
                sound.coffeeTea.pause();
                
                this.forest.classList.remove("selected");
                sound.forest.pause();

                this.bonFire.classList.remove("selected");
                sound.bonFire.pause();

                break;
    
            case "coffeeTea":
                this.coffeeTea.classList.toggle("selected");
                sound.toggle(sound.coffeeTea);

                this.forest.classList.remove("selected");
                sound.forest.pause();

                this.clounds.classList.remove("selected");
                sound.clounds.pause();

                this.bonFire.classList.remove("selected");
                sound.bonFire.pause();

                break;

            case "bonFire":
                this.bonFire.classList.toggle("selected");
                sound.toggle(sound.bonFire);

                this.forest.classList.remove("selected");
                sound.forest.pause();

                this.clounds.classList.remove("selected");
                sound.clounds.pause();

                this.coffeeTea.classList.remove("selected");
                sound.coffeeTea.pause();

                break;

            default:
                break;
        }
    }
};



export const components = {
    button,
    input,
    display,
    card,
    enableInput() {
        input.wrapper.classList.remove("hide");
        display.wrapper.classList.add("hide");
    },
    disableInput() {
        input.wrapper.classList.add("hide");
        display.wrapper.classList.remove("hide");
    }
};


input.wrapper.addEventListener("input", () => input.validated());


card.forest.addEventListener("click", (event) => {
    
    if(event.target.type != "range") card.selected("forest");
});

card.clounds.addEventListener("click", (event) => {
    if(event.target.type != "range")  card.selected("clounds");
});

card.coffeeTea.addEventListener("click", (event) => { 
    if(event.target.type != "range")  card.selected("coffeeTea");
});

card.bonFire.addEventListener("click", (event) => { 
    if(event.target.type != "range") card.selected("bonFire");
});


input.vlForest.addEventListener("input", () => {
    input.changeVolume(sound.forest,input.vlForest);
    
});

input.vlClounds.addEventListener("input", () => {
    input.changeVolume(sound.clounds,input.vlClounds);
    
});

input.vlCoffeeTea.addEventListener("input", () => {
    input.changeVolume(sound.coffee,input.vlCoffeeTea);
    
});

input.vlBonFire.addEventListener("input", () => {
    input.changeVolume(sound.bonFire,input.vlBonFire);
    
});
