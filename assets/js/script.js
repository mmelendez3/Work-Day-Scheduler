var time = moment().format('LLLL')

var standardTime = moment().format('h')
var militaryTime = moment().format('k')

//set date and time at top of web page
const currentDate = $('#currentDay')
currentDate.text(time)

//save tasks for each hour into local storage
$(".container").on("click", "button", function() {
  
var hr9 = document.getElementById('9').value;
localStorage.setItem('task9', hr9);
var hr10 = document.getElementById('10').value;
localStorage.setItem('task10', hr10);
var hr11 = document.getElementById('11').value;
localStorage.setItem('task11', hr11);
var hr12 = document.getElementById('12').value;
localStorage.setItem('task12', hr12);
var hr13 = document.getElementById('13').value;
localStorage.setItem('task13', hr13);
var hr14 = document.getElementById('14').value;
localStorage.setItem('task14', hr14);
var hr15 = document.getElementById('15').value;
localStorage.setItem('task15', hr15);
var hr16 = document.getElementById('16').value;
localStorage.setItem('task16', hr16);
var hr17 = document.getElementById('17').value;
localStorage.setItem('task17', hr17);

})

//get each saved task from local storage
var saved9 = localStorage.getItem('task9')
document.getElementById('9').value = saved9
var saved10 = localStorage.getItem('task10')
document.getElementById('10').value = saved10
var saved11 = localStorage.getItem('task11')
document.getElementById('11').value = saved11
var saved12 = localStorage.getItem('task12')
document.getElementById('12').value = saved12
var saved13 = localStorage.getItem('task13')
document.getElementById('13').value = saved13
var saved14 = localStorage.getItem('task14')
document.getElementById('14').value = saved14
var saved15 = localStorage.getItem('task15')
document.getElementById('15').value = saved15
var saved16 = localStorage.getItem('task16')
document.getElementById('16').value = saved16
var saved17 = localStorage.getItem('task17')
document.getElementById('17').value = saved17
     












// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };
  
// {
//     //console.log($(this)) WORKS
    
//     //targets "textarea" for event listener
//     var text = $("textarea")
//     .val()
//     .trim()
//     //console.log(text) WORKS
  
//   })

// saveTasks()