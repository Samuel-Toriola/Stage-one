"use strict";

const displayDay = document.querySelector(".text-day");
const displayTime = document.querySelector(".text-time");

const date = new Date();

const utcHours = date.getUTCHours();
const utcMinute = date.getUTCMinutes();
const utcSeconds = date.getUTCSeconds();
console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
console.log(date.getUTCSeconds());

let currentDay = "";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

days.forEach((day, i) => {
  if (i === date.getDay()) currentDay = day;
});

displayDay.textContent = currentDay;
displayTime.textContent = `${utcHours}:${utcMinute}:${utcSeconds}`;
