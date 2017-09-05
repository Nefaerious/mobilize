var time = document.getElementById("time-header");

function updateClock(){
  time.textContent = moment().format("h:mm a");
}

setInterval(updateClock, 1000);
