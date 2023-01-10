// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = document.getElementById('currentDay');
var timeslotEl = document.getElementsByClassName('time-block');
var element = document.getElementsByClassName('row');
var saveBtnEl = document.getElementsByClassName('saveBtn');

let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear;
console.log(date);
currentDayEl.innerText = date;

let currentTimeEl = date.getHours();


$(function schedule() {
  Array.from(timeslotEl).forEach(row =>{
    let rowIdString = row.id,
    rowHour;
    if (rowIdString){
      rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
      console.log(currentTimeEl+" "+rowHour)
     
      if (currentTimeEl === rowHour){ 
        
        // Array.from(element).forEach(rows =>{
          row.classList.remove('past');
          row.classList.add('present');
          row.classList.remove('future');
        // })
      }else if ((currentTimeEl < rowHour)){
        //Array.from(element).forEach(rows=>{
        console.log("test")
          row.classList.remove('past');
          row.classList.remove('present');
          row.classList.add('future');
        // })
      } else if((currentTimeEl > rowHour)) {
        // console.log('wite')
        // Array.from(element).forEach(rows =>{
          row.classList.add('past');
          row.classList.remove('present');
          row.classList.remove('future');
        // })
      }
    }
  })

  Array.from(saveBtnEl).forEach(button=>{
    button.addEventListener('click', function(event){
    event.preventDefault();
    let description = button.parentElement.getElementsByTagName('textArea')[0].value;
    console.log(description)
    localStorage.setItem('description',description);
    })
  })

  function saveData(e){
    var number=$(e).data('num');
    var input = document.getElementsByTagName('textArea'+number).value;
    localStorage.setItem('text'+ number,input);
  }

  for (var i = 9; i <= 20; i++) {
    document.getElementsByClassName('textArea'+ i).value = localStorage.getItem('text'+i);
  }
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
});
