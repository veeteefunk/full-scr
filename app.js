let myDocument = document.documentElement;
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    if(btn.textContent == "Go Fullscreen"){
        if(myDocument.requestFullscreen){
            myDocument.requestFullscreen();
        }
         else if(myDocument.msRequestFullscreen) {
            myDocument.msRequestFullscreen();
        }
        else if(myDocument.mozRequestFullscreen) {
            myDocument.mozRequestFullscreen();
        }
        else if(myDocument.webkitRequestFullscreen){
            myDocument.webkitRequestFullscreen();
        }

        btn.textContent = "Exit Fullscreen";
    }
    else {
        if(document.exitFullscreen){
            document.exitFullscreen();
        }
        else if(document.msexitFullscreen) {
            document.msexitFullscreen();
        }
        else if(document.mozexitFullscreen){
            document.mozexitFullscreen();
        }
        else if(document.webexitFullscreen){
            document.webexitFullscreen();
        }

    btn.textContent = "Go Fullscreen";
    }
});