const hours = document.querySelector(".h");
const minutes = document.querySelector(".m");
const seconds = document.querySelector(".s");
const checkMeridiem = document.querySelector(".meridiem");
const day = document.querySelector(".Day");
const date = document.querySelector(".Date");

const tick = () => {
  const current = new Date();

  let ss = current.getSeconds();
  let mm = current.getMinutes();
  let hh = current.getHours();
  let meridiem = "AM";
  let currentDay = current.getDay();

  //Converting the 24 hours formate into 12 hour formate
  if (hh === 00) {
    hh = 12;
    meridiem = "AM";
  } else if (hh === 12) {
    meridiem = "PM";
  } else if (hh > 12) {
    hh = hh - 12;
    meridiem = "PM";
  }

  hours.textContent = `${hh < 10 ? `0${hh}` : hh}`;
  minutes.textContent = `${mm < 10 ? `0${mm}` : mm}`;
  seconds.textContent = `${ss < 10 ? `0${ss}` : ss}`;
  checkMeridiem.textContent = meridiem;
  date.textContent = current.toLocaleDateString();
  day.textContent = getDayName(currentDay);
  // day.textContent =
};

const getDayName = (value) => {
  const DayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return DayNames[value];
};

setInterval(tick, 1000);
