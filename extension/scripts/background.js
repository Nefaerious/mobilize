var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};

function getRandomImage()){
  xhttp.open("GET", "unsplash.com/photos/random", true);
  xhttp.send();
}

function setCollection(){

}

function getUser(){

}
