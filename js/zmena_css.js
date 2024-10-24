const image = document.querySelector("img");
const all = document.querySelector("body");
const p = document.querySelector("#myP");

document.querySelector("#myButton").onclick = function(){

    
    const all = document.querySelector("body");
    
    all.style.backgroundImage = "none";    
    all.style.backgroundColor = "black";
    all.style.color = "white";
    p.style.fontSize = "20px";

}


document.querySelector("#myButton").onmouseover = function(){

    
    
    all.style.backgroundImage = "none";    
    all.style.backgroundColor = "gray";
    all.style.color = "white";
    all.style.fontSize = "20px";
    image.style.maxWidth = "30%";
}


window.addEventListener("keydown", checkKeyPress, false);
// This event listener runs checkKeyPress function when a key is pressed down
 
 
// this function checks to see if the letter 'a' key has been pressed
function checkKeyPress(key) {
 if (key.keyCode == "72") {
 
 all.style.backgroundImage = "none";    
 all.style.backgroundColor = "gray";
 all.style.color = "white";
 all.style.fontSize = "20px";
 image.style.maxWidth = "30%";
 // 72 is the keycode that is returned when the 'h' letter key is pressed
 }
}

