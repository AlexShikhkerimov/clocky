class ClockHand {
    constructor() {
        this.currentDate = new Date()
        this.el
        this.degree = 0
        this.elClasses = ""
        this.speed = 1000
        this.shift = 1
    }

    createHand() {
        this.el = document.createElement('div')
        this.el.className = this.elClasses
        document.querySelector(`.clock__dial`).append(this.el)
    }

    moveHand(degree) {
        this.el.style.transform = `rotate(${degree}deg)`
    }

    handRate() {
        let i = this.degree + this.shift
        let timeRate = setTimeout(function tick() {
            this.moveHand(i)
            i += this.shift;
            timeRate = setTimeout(tick.bind(this), this.speed);
        }.bind(this), 0);
    }

    start() {
        this.createHand()
        this.getCurrentDegree()
        this.moveHand(this.degree)
        this.handRate()
    }
}

class secondHand extends ClockHand {
    constructor(elClasses, speed) {
        super()
        this.elClasses = elClasses
        this.speed = speed
        this.shift = 6
    }

    getCurrentDegree() {
        this.timeValue = this.currentDate.getSeconds()
        this.degree = this.timeValue * 6
    }
}

class minuteHand extends ClockHand {
    constructor(elClasses, speed) {
        super()
        this.elClasses = elClasses
        this.speed = speed
        this.shift = 0.3
    }

    // ToDo: need shift calculate method

    getCurrentDegree() {
        const   timeValue = this.currentDate.getMinutes()
        this.degree = timeValue * 6
    }
}

class hourHand extends ClockHand {
    constructor(elClasses, speed) {
        super()
        this.elClasses = elClasses
        this.speed = speed
        this.shift = 1.5
    }

    getCurrentDegree() {
        const   timeValue = this.currentDate.getHours(),
                minutesTimeValue = this.currentDate.getMinutes(),
                part = Math.floor(minutesTimeValue / 3) * this.shift,
                remainder = 60 - minutesTimeValue
        
        // ToDo: need shift calculate method

        this.degree = timeValue * 30
    }
}

const seconds   = new secondHand(`clock__hand clock__second-hand`, 1000)
const minutes   = new minuteHand(`clock__hand clock__minute-hand`, 3000)
const hours     = new hourHand(`clock__hand clock__hour-hand`, 180000)

seconds.start()
minutes.start()
hours.start()