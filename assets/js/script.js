// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


const rightNow = dayjs();

let formattedDate = rightNow.format("dddd, MMMM DD, YYYY")


$('#currentDay').text(formattedDate);

let formattedTime = rightNow.format("h:mm A"); 

console.log(formattedTime)

$("#currentTime").text(formattedTime);




// $ --> JQUERY

//document.getElementById("currentTime").textContent = formattedTime; is equivlent  to



//dayjs function




//$(function () {



function colorChanges(){
    let blockHourElements = document.querySelectorAll("#blockHour"); 

    let blockHourArray = Array.from(blockHourElements); 

    console.log(blockHourArray);

    //const hourArray = [] is wet so instead do: 
    
    const currentHour = dayjs().hour();


    blockHourArray.forEach(blockHour => {
        console.log(blockHour)
        
        let dataHour = blockHour.getAttribute("data-hour");

        console.log(dataHour);

        if (dataHour < currentHour) {
            blockHour.classList.add("past");
        } else if (dataHour === currentHour) {
            blockHour.classList.add("present");
        } else {
            blockHour.classList.add("future");
        }
        })


    console.log(blockHourElements)
};









$(document).ready(function(){
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? 

    colorChanges();

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
    });
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


  








