// Countdown
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const dateToday = new Date();

const dateAtNewYear = new Date('August 31 2020 00:00:00');
function dynamicDateChange () {
    const currentTime = new Date();
    const timeLeft = dateAtNewYear - currentTime
    console.log(timeLeft);
    const daysLeft = Math.floor(timeLeft / 1000 /60 /60/ 24);
    const hoursLeft = Math.floor((timeLeft / 1000 / 60/ 60) % 24);  
    const minutesLeft = Math.floor((timeLeft / 1000/ 60) % 60)
    const secondsLeft = Math.floor((timeLeft / 1000) % 60)
    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft < 10 ?  '0' + hoursLeft : hoursLeft;
    minutes.innerHTML = minutesLeft < 10 ? '0'+ minutesLeft : minutesLeft;
    seconds.innerHTML = secondsLeft < 10 ? '0' + secondsLeft: secondsLeft;
}

setInterval(dynamicDateChange, 1000);