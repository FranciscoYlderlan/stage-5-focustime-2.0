export const sound = {
    btnPress: new Audio("https://github.com/FranciscoYlderlan/stage-5-focustime-2.0/blob/main//assets/audios_button-press.wav?raw=true"),
    music: new Audio("https://github.com/FranciscoYlderlan/stage-5-focustime-2.0/blob/main//assets/audios_lo-fi.mp3?raw=true"),
    forest: new Audio("https://github.com/FranciscoYlderlan/stage-5-focustime-2.0/blob/main//assets/Floresta.wav?raw=true"),
    clounds: new Audio("https://github.com/FranciscoYlderlan/stage-5-focustime-2.0/blob/main//assets/Chuva.wav?raw=true"),
    coffeeTea: new Audio("https://github.com/FranciscoYlderlan/stage-5-focustime-2.0/blob/main//assets/Cafeteria.wav?raw=true"),
    bonFire: new Audio("https://github.com/FranciscoYlderlan/stage-5-focustime-2.0/blob/main//assets/Lareira.wav?raw=true"),

    kitchenTimer: new Audio("../assets/audios_kitchen-timer.mp3"), 
    
    updateVolume(value) {
        this.forest.volume = value;
        this.clounds.volume = value;
        this.coffeeTea.volume = value;
        this.bonFire.volume = value;

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
