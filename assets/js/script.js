// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


const rightNow = dayjs();

let formattedDate = rightNow.format("dddd, MMMM DD, YYYY")


$('#currentDay').text(formattedDate);

let formattedTime = rightNow.format("h:mm A"); 



$("#currentTime").text(formattedTime);




function colorChanges(){
    let blockHourElements = document.querySelectorAll("#blockHour"); 

    let blockHourArray = Array.from(blockHourElements); 



    //const hourArray = [] is wet so instead do: 
    
    const currentHour = dayjs().hour();


    blockHourArray.forEach(blockHour => {
    
        
        let dataHour = blockHour.getAttribute("data-hour");


        if (dataHour < currentHour) {
            blockHour.classList.add("past");
        } else if (dataHour === currentHour) {
            blockHour.classList.add("present");
        } else {
            blockHour.classList.add("future");
        }
        })
};

$(document).ready(function(){
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? 

    colorChanges();

  

    let timeBlocksContainer = document.getElementById("timeBlocksContainer"); 

        timeBlocksContainer.addEventListener("click", function(event){
            let saveButton = event.target.closest('.saveBtnElement');
            if (saveButton) {
                let parentContainer = saveButton.closest(".time-block")
                let textarea = parentContainer.querySelector(".description")
                let dataHour = parentContainer.getAttribute("data-hour");
                saveTextArea(textarea.value, dataHour);
            } 
        });
});

   

function saveTextArea(textContent, dataHour){ 
    console.log(textContent, dataHour)

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];  

    let existingTask = tasks.find(task => task.blockHour === dataHour);

    if(existingTask) {
        existingTask.textContent = textContent;
    } else {
        let newTask = {blockHour: dataHour, textContent: textContent};
        tasks.push(newTask);
    }


    tasks.push({blockHour:dataHour, textContent:textContent})

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// timeBlocksContainer.addEventListener("click", function(event){
//     // Use `.closest()` to find the nearest ancestor which is a save button
//    

//     
//         // Use `.closest()` to find the nearest ancestor that is a time-block
//         // Then use `querySelector` to find the textarea within that time-block
//         const timeBlock = saveButton.closest('.time-block');
//         const textArea = timeBlock.querySelector('.description');

//         // Log the value of the textarea
//         console.log(textArea.value);
//     }


    
    //How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // TODO: Add code to display the current date in the header of the page.


  



