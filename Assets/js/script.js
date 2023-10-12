var curDayDisplay = $('#currentDay');
var curDay = dayjs();
var curHour = curDay.format("h");
var plannerDisplay = $('#plannerDisplay');
var planRow = $("#planRow");
var timeStart = 9;  // dayjs().hour(9).format("H");
console.log(timeStart);


curDayDisplay.text(curDay.format("dddd, MMM D, YYYY"));
displayRows();

function displayRows() {
  for (i = 0; i <= 8; i++) {
    var rowTime = i + timeStart;
    var curHourParse = JSON.parse(curHour);

    var timeClass;

    if (curHourParse === rowTime) {
      timeClass = "present";
      console.log("present");
    } else if (curHourParse > rowTime) {
      timeClass = "past";
      console.log("past")
    } else if (curHourParse < rowTime) {
      timeClass = "future";
      console.log("future");
    };

    plannerDisplay.append(`<div id="planRow" class="row time-block ${timeClass}">
      <div class= "col-2 col-md-1 hour text-center py-3">${rowTime}:00</div>
  <textarea id="textArea${rowTime}" class="col-8 col-md-10 description captureText" rows="3"> </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>
</div>`);



  }
}

plannerDisplay.on("click", ".saveBtn", function () {
  console.log("this button works!");
  // var time = 
  // console.log(time);
  // var value;
  // localStorage.setItem(time, JSON.stringify(value))


});


$(function () {
});






// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am & ndash; 5pm
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// past present future
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

