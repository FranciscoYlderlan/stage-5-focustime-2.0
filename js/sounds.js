export const sound = {
    btnPress: new Audio("https://github.com/FranciscoYlderlan/stage-5-focustime-2.0/blob/main/assets/audios_button-press.wav?raw=true"),
    forest: new Audio("https://github.com/lfoalves/material-stage-05/blob/master/sounds/Floresta.mp3?raw=true"),
    clounds: new Audio("https://github.com/lfoalves/material-stage-05/blob/master/sounds/Chuva.mp3?raw=true"),
    coffeeTea: new Audio("https://github.com/lfoalves/material-stage-05/blob/master/sounds/Cafeteria.mp3?raw=true"),
    bonFire: new Audio("https://github.com/lfoalves/material-stage-05/blob/master/sounds/Lareira.mp3?raw=true"),

    kitchenTimer: new Audio("https://github.com/FranciscoYlderlan/stage-5-focustime-2.0/blob/main/assets/audios_kitchen-timer.mp3?raw=true"), 
    
    updateVolume(component,value) {
        component.volume = value;
    },
    resetVolume() {
        this.forest.volume = 0.5;
        this.clounds.volume = 0.5;
        this.coffeeTea.volume = 0.5;
        this.bonFire.volume = 0.5;
    },

    toggle(sound) {
        sound.paused ? sound.play(): sound.pause();
    }
}
