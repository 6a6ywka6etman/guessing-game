class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guissTry = Math.round((this.min + this.max) / 2);
        return this.guissTry;
    }

    lower() {
        this.max = this.guissTry;
        return this.max;
    }

    greater() {
        this.min = this.guissTry;
        return this.min;
    }
}

module.exports = GuessingGame;
