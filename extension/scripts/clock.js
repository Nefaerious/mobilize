var time = document.getElementById("time-header");
var month = document.getElementById("calendar-header");


function updateClock(){
  time.textContent = moment().format("h:mm a");
  month.textContent = moment().format("MMMM YYYY");
}

setInterval(updateClock, 1000);
