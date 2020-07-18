// Countdown
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const dateToday = new Date();

const dateAtNewYear = new Date('August 01 2020 00:00:00')


function dynamicDateChange () {
    const currentTime = new Date();//DO NOT FORGET TO DEFINE THIS currentTime parameter within your function.
    const timeLeft = dateAtNewYear - currentTime// Result is in milliseconds
    console.log(timeLeft);
    
    const daysLeft = Math.floor(timeLeft / 1000 /60 /60/ 24); //This converts milliseconds to days,and logs 265 Days(todays date is APRIL 10, 2020)

    const hoursLeft = Math.floor((timeLeft / 1000 / 60/ 60) % 24); // We use the modulus operator to account for the number of hours left in this current day because there are 24 hours in a day . 
    
    const minutesLeft = Math.floor((timeLeft / 1000/ 60) % 60)// We use the modulus operator to account for the number of hours left in this current day because there are 60 minutes in every hour.

    const secondsLeft = Math.floor((timeLeft / 1000) % 60)// We use the modulus operator to account for the number of hours left in this current day because there are 60 seconds in every minute.

    days.innerHTML = daysLeft;

    hours.innerHTML = hoursLeft < 10 ?  '0' + hoursLeft : hoursLeft;

    minutes.innerHTML = minutesLeft < 10 ? '0'+ minutesLeft : minutesLeft;

    seconds.innerHTML = secondsLeft < 10 ? '0' + secondsLeft: secondsLeft;

}
setInterval(dynamicDateChange, 1000);