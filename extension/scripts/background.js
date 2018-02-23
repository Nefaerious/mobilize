var xhr;

function initializeXHR(){
  xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = requestStateChangeHandler;
}

function getImageType(image){
  xhr.open("GET", "https://api.unsplash.com/photos/random/?w=1920&h=1080&orientation=landscape&featured=true&query=beach", true);
  xhr.setRequestHeader("Authorization", "Client-ID 5db66184bd1158b9377247c8fec383d3d7b187e39343a5a1584eaced7d4323c8");
  xhr.send();
}

function getRandomImage(){
  xhr.open("GET", "https://api.unsplash.com/photos/random/?w=1920&h=1080&orientation=landscape&featured=true", true);
  xhr.setRequestHeader("Authorization", "Client-ID 5db66184bd1158b9377247c8fec383d3d7b187e39343a5a1584eaced7d4323c8");
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

initializeXHR();
getRandomImage();
