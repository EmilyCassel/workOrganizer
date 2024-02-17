// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


//current date
let currentDate = new Date(); 

let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let day = dayNames[currentDate.getDay()];
let month = monthNames[currentDate.getMonth()];
let date = currentDate.getDate();
let year = currentDate.getFullYear();

let formattedDate = day + ', ' + month + ' ' + date + ', ' + year;

document.getElementById('currentDay').textContent = formattedDate;

const dayjs = require('dayjs');

const currentHour = dayjs().hour();

console.log(currentHour);







//$(function () {




$(document).ready(function(){
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? 


    
    document.addEventListener("DOMContentLoaded", function(){
        var saveButtonVariable = document.querySelectorAll(".saveBtnElement")

        saveButtons.forEach(function(button){
            button.addEventListener("click", function(){
                let timeBlock = this.closet(".time-block");
                let timeBlockId = timeBlock.id; 
                let userInput = timeBlock.querySelector("description").value; 

                localStorage.setItem(timeBlockId, userInput)
            })
        })
    

    function updateTimeBlocks() {
        var currentHour = dayjs().hour();

        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("data-hour"));
           
            $(this).removeClass("past present future");

            if (blockHour < currentHour) {
                $(this).addClass("past");
            } else if (blockHour === currentHour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            }
        });

    }
    });
    







    
    //How can DOM traversal be used to get the "hour-x" id of the
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


  









  //document.addEventListener('DOMContentLoaded', function() {
    //let saveButton = document.getElementById(saveButton); 
    //saveButton.addEventListener("click", function(){
      //  hourPast();
        //hourPresent();
      //  hourFuture();
    //})