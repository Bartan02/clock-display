class ClockDisplay {
    hours;
    minutes;
    output;
    constructor(output) {
        this.output = output;
        this.hours = new NumberDisplay(24);
        this.minutes = new NumberDisplay(60);
        this.updateDisplay();
    }
    timeTick() {
        this.minutes.increment();
        if (this.minutes.getValue() === 0) {
            this.hours.increment();
        }
        this.updateDisplay();
    }
    setTime(hours, minutes) {
        this.hours.setStringValue(hours);
        this.minutes.setStringValue(minutes);
        this.updateDisplay();
    }
    updateDisplay() {
        const displayString = `${this.hours.getStringValue()}:${this.minutes.getStringValue()}`;
        this.output.innerText = displayString;
    }
}
class NumberDisplay {
    limit;
    value;
    constructor(rollOverLimit) {
        this.limit = rollOverLimit;
        this.value = 0;
    }
    getValue() {
        return this.value;
    }
    setValue(replacementValue) {
        if ((replacementValue >= 0) && (replacementValue < this.limit)) {
            this.value = replacementValue;
        }
    }
    getStringValue() {
        if (this.value < 10) {
            return "0" + this.value;
        }
        else {
            return "" + this.value;
        }
    }
    setStringValue(newValue) {
        this.setValue(Number(newValue));
    }
    increment() {
        this.value = (this.value + 1) % this.limit;
    }
}
console.log('Javascript is working!');
window.addEventListener('load', () => {
    console.log('Handling the Load event');
    const outputHTMLElement = document.getElementById('output');
    const hoursInput = document.getElementById('hoursInput');
    const minutesInput = document.getElementById('minutesInput');
    const clock = new ClockDisplay(outputHTMLElement);
    document.getElementById('tickerButton').addEventListener('click', () => {
        console.log('User clicked ticker button');
        clock.timeTick();
    });
    document.getElementById('setTime').addEventListener('click', () => {
        console.log('User clicked setTime button');
        clock.setTime(hoursInput.value, minutesInput.value);
    });
});
//# sourceMappingURL=app.js.map