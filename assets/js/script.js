
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
        } else if (dataHour == currentHour) {
            blockHour.classList.add("present");
        } else {
            blockHour.classList.add("future");
        }
        })
};

$(document).ready(function(){
    memory();

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
    console.log(textContent, dataHour);

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];  

   
    let existingTask = tasks.find(task => task.blockHour === dataHour);

    if(existingTask) {

        if(existingTask.textContent !== textContent){
            existingTask.textContent = textContent;
            
          
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    } else {
      
        let newTask = {blockHour: dataHour, textContent: textContent};
    
        tasks.push(newTask);

    
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}


function memory() {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    let blockHourElements = document.querySelectorAll('.time-block');
    blockHourElements.forEach(blockHourElement => {
    
        let dataHour = blockHourElement.getAttribute('data-hour');

        let task = tasks.find(task => task.blockHour === dataHour);

        if (task) {
            let textContent = task.textContent;
            blockHourElement.querySelector('.description').value = textContent;
        }
    });
};




  


