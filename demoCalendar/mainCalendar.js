/*var copyR = $(".copyright").html();            
console.log =($(".copyright"));
$(".copyright").html(copyR + String(" " + currentYYYY)); */

/*<script>            
const Rx = document.querySelector(".copyright");
Nx.textContent = (Rx) =>{
    return String(Rx + ' ' + currentYYYY);                
}
console.log(currentMonthlong);
</script> */

//   Date.Getday() returns day number of the week e.g. 5
//   0 = Sunday.
//   1 = Monday.
//   2 = Tuesday.
//   3 = Wednesday.
//   4 = Thursday.
//   5 = Friday.
//   6 = Saturday.
//=====================================================
// queryselector reads value
let tableCaption = document.querySelector("caption");

// Next 3 lines are used to test Year,Month if columns matches google calendar
//const d = new Date("January 21, 2023 01:15:00");
//d.setDate(15);
//let currentDate = d;
// Next 3 lines ends here

let currentDate = new Date();
let currentDay = currentDate.getDay();
let currentDD = String(currentDate.getDate()).padStart(2, "0");
let currentMM = String(currentDate.getMonth() + 1).padStart(2, "0"); //January is 0!
let currentYYYY = currentDate.getFullYear();
let currentMonthLong = currentDate.toLocaleString("default", { month: "long" });
let currentMonth = currentDate.getMonth();
let firstDayofMonth = new Date(currentYYYY, currentMonth, 1);

let month = currentDate.getMonth();

let lastDayofMonth = new Date(currentYYYY, month + 1, 0).getDate();

let firstDay = firstDayofMonth.getDay();
let shortMonthName = currentMonthLong.slice(0, 3);
let today = shortMonthName + ", " + currentDD;

let arrayDayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

// Change value:
tableCaption.innerHTML = currentMonthLong + ", " + currentYYYY;

populateDay();

function populateDay() {
  // update tables with "textContent"
  //build the cell's date of Calendar month

  let dayXX = {};
  let calendarDay = 0;
  const startFirstDay = Number(firstDay + 1); // firstDay 0 means Sun.
  for (let i = startFirstDay; calendarDay < lastDayofMonth; i++) {
    calendarDay++;
    const str = String(i); //<-- i is the starting point
    const result = typeof str === "string" ? str.padStart(2, "0") : "";
    dayXX = "#d" + result;
    const day = document.querySelector(dayXX);
    let strCalendarDay = String(calendarDay);
    let resultCalendarDay =
      typeof strCalendarDay === "string" ? strCalendarDay.padStart(2, "0") : "";
    day.textContent = resultCalendarDay;
  }
}

function showPageTwo(clicked_id) {
  console.log(clicked_id);
  let dday = document.getElementById(clicked_id).innerText;
  window.location =
    "pagetwo.html?" +
    dday +
    "|" +
    currentMM +
    "|" +
    currentYYYY +
    "|" +
    currentMonthLong;
}
