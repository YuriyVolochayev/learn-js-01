//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-ДАТА та ЧАС-=-=-=-=-=-=-=-=-=-=-=-=-

// const currentDate = new Date(); // стоврення нового екземпляра часу

// console.log(currentDate);
// console.log(currentDate.getDate());
// console.log(currentDate.getDay());
// console.log(currentDate.getMonth());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getTime());

// console.dir(currentDate);

// const date1 = Date.now()

// setTimeout(() => {
//     const date2 = Date.now();
//     console.log(date2 - date1);
    
// }, 3000);


const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".clockface");

class Timer {

    constructor({ onTick }) {
        this.onTick = onTick;
        this.isActive = false

        this.init();
        this.intervalId = null;
    }

    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    start() {

        if (this.isActive) {
            return;
        }
        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;

            const time = this.getTimeComponents(deltaTime);

            this.onTick(time)
            

        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.init()
        this.isActive = false

    }

    getTimeComponents(time) {
        const sec = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        const min = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        
        return { hours, min, sec}
    }

    pad(value) {
        return String(value).padStart(2, "0");
    }
}

const timer = new Timer({
    onTick: update
});// створили екземпляр класу

startBtn.addEventListener("click", timer.start.bind(timer));
stopBtn.addEventListener("click", timer.stop.bind(timer));

function update({ hours, min, sec}) {
    clockface.innerHTML = `${hours}:${min}:${sec}`
}
