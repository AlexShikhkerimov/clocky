export class Tableau {
    constructor(theme, location) {
        this.theme = theme
        this.location = location
    }

    render(displayNode) {
        this.displayNode = displayNode
        const timestamp = this.dateTime
        const tableauNode = document.createElement('div')
        tableauNode.className = `tableau ${this.theme}`

        tableauNode.innerHTML = `
            <div class="tableau__top">
                <div class="day-segment">${timestamp.today.weekday}</div>
                <div class="date-segment">${timestamp.today.date}</div>
            </div>
            <div class="tableau__main">
                <div class="time-segment">
                    <span class="hour-segment">${timestamp.time.hour}</span>
                    <span class="time-separator">:</span>
                    <span class="minute-segment">${timestamp.time.minute}</span>  
                </div>
                <div class="second-segment">${timestamp.time.second}</div>
            </div>
        `

        this.displayNode.replaceChildren(tableauNode)
    }

    run() {
        setInterval(() => {
            this.render(this.displayNode)
        }, 1000)
    }

    get dateTime() {
        const now = new Date()
        return {
            today: this.formatDate(now),
            time: {
                hour: this.addZeroToNumber(now.getHours()),
                minute: this.addZeroToNumber(now.getMinutes()),
                second: this.addZeroToNumber(now.getSeconds()),
            }
        }
    }

    formatDate(timestamp) {
        const dateOptions = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        }
        const weekdayOptions = {
            weekday: "short",
        }

        return {
            date: new Intl.DateTimeFormat("en-US", dateOptions).format(timestamp),
            weekday: new Intl.DateTimeFormat("en-US", weekdayOptions).format(timestamp)
        }
    }

    addZeroToNumber(number) {
        return Number(number) <= 9 ? `0${number}` : number
    }
}