// Grab UI elements
const daysElem = document.getElementById("days");
const hoursElem = document.getElementById("hrs");
const minElem = document.getElementById("min");
const secElem = document.getElementById("sec");

const endDate = "July 20 2021 00:00 GMT +0100";

// initial call
var countdown = doCountdown(endDate);

// call it every second
var countdownState = setInterval(function () {
  countdown = doCountdown(endDate);
  // Change UI values with date variables
  daysElem.innerHTML = ("0" + countdown.days).slice(-2);
  hoursElem.innerHTML = ("0" + countdown.hours).slice(-2);
  minElem.innerHTML = ("0" + countdown.minutes).slice(-2);
  secElem.innerHTML = ("0" + countdown.seconds).slice(-2);

  // close timer when it reaches 0
  if (countdown.seconds < 0) {
    clearInterval(countdownState);
    alert("Time is up!");
  }
}, 1000);

// Function for converting unix timestamp into days,hours,min and sec
function doCountdown(deadlineStringDate) {
  // Get current date and substract from end date in milliseconds
  const differenceInTimeMillis =
    Date.parse(deadlineStringDate) - Date.parse(new Date());

  // Convert it into seconds and days, hours, min, sec
  const differenceInSeconds = differenceInTimeMillis / 1000;
  const seconds = Math.floor(differenceInSeconds % 60);
  const minutes = Math.floor((differenceInSeconds / 60) % 60);
  const hours = Math.floor((differenceInSeconds / 3600) % 24);
  const days = Math.floor(differenceInSeconds / 3600 / 24);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
