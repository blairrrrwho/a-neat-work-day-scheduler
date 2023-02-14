// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //



// Wraps all code that interacts with the DOM in a call to jQuery to ensure that the
// code isn't run until the browser has finished rendering all the elements in the html.
$(document).ready(function() {
  // Add an event listener for click events on the save button
  // This code uses id in the containing time-block as a key to save the user input in local storage
  $(".saveBtn").on("click", function() {
    let value = $(this).siblings(".description").val();
    let time = $(this).parent().attr('id');

    localStorage.setItem(time, value);

    $(".notification").addClass("show");
    setTimeout(showNotification, 4000);
  });

  function showNotification() {
    $(".notification").removeClass("show");
  }

  function updateBlocks() {
    let currentHour = dayjs().hour();
    console.log(currentHour);

    $(".time-block").each(function() {
      let blockHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(blockHour);
    });

    //   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?

  }

  updateBlocks();

  
  // Code to get any user input that was saved in localStorage
  // Set the values of the corresponding textarea elements
  $('#hour-7 .description').val(localStorage.getItem('hour-7'));
  $('#hour-7 .description').val(localStorage.getItem('hour-8'));
  $('#hour-7 .description').val(localStorage.getItem('hour-9'));
  $('#hour-7 .description').val(localStorage.getItem('hour-10'));
  $('#hour-7 .description').val(localStorage.getItem('hour-11'));
  $('#hour-7 .description').val(localStorage.getItem('hour-12'));
  $('#hour-7 .description').val(localStorage.getItem('hour-13'));
  $('#hour-7 .description').val(localStorage.getItem('hour-14'));
  $('#hour-7 .description').val(localStorage.getItem('hour-15'));
  $('#hour-7 .description').val(localStorage.getItem('hour-16'));
  $('#hour-7 .description').val(localStorage.getItem('hour-17'));
  $('#hour-7 .description').val(localStorage.getItem('hour-18'));
  $('#hour-7 .description').val(localStorage.getItem('hour-19'));

  // Code that will display the current date in the header of the page
  $('#currentDay').text(dayjs().format('ddd, MMM D, YYYY'));



});
