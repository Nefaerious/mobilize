
function getRandomImage(){
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = requestStateChangeHandler;
  xhr.open("GET", "https://api.unsplash.com/photos/random/", true);
  xhr.setRequestHeader("Authorization", "Client-ID 5db66184bd1158b9377247c8fec383d3d7b187e39343a5a1584eaced7d4323c8");
  xhr.setRequestHeader("w", "1920");
  xhr.setRequestHeader("h", "1080");
  xhr.setRequestHeader("orientation", "landscape");
  xhr.send();
}

function requestStateChangeHandler(){
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.response);
    var obj = JSON.parse(JSON.stringify(this.response));
    var imageURL = obj.urls.full;
    console.log(imageURL);
    document.getElementById("image").style.backgroundImage = "url('"+imageURL+"')";
  }
}
