var time = document.getElementById("time-header");

function updateClock(){
  time.textContent = moment().format("h:mm:ss a");
}

setInterval(updateClock, 1000);
