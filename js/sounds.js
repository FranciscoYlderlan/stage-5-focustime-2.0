export const sound = {
    btnPress: new Audio("../assets/audios_button-press.wav"),
    music: new Audio("../assets/audios_lo-fi.mp3"),
    forest: new Audio("../assets/Floresta.wav"),
    clounds: new Audio("../assets/Chuva.wav"),
    coffeeTea: new Audio("../assets/Cafeteria.wav"),
    bonFire: new Audio("../assets/Lareira.wav"),

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
