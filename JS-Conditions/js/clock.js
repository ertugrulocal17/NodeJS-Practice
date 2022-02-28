let userName = prompt("Lütfen adinizi girin:");
let myName = document.querySelector("#myName");

myName.innerHTML = userName;

function showTime() {
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let longDay;
  if (day == 1) {
    longDay = "Monday";
  } else if (day == 2) {
    longDay == "Tuesday";
  } else if (day == 3) {
    longDay == "Wednesday";
  } else if (day == 4) {
    longDay == "Thursday";
  } else if (day == 5) {
    longDay == "Friday";
  } else if (day == 6) {
    longDay == "Saturday";
  } else if (day == 7) {
    longDay == "Sunday";
  }

  document.querySelector("#myClock").innerHTML = `${
    hour < 10 ? "0" + hour : hour
  }:${min}:${sec} ${longDay}`;
}

setInterval(() => {
  showTime();
}, 1000);
