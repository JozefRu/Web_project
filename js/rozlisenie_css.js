

var q = window.matchMedia("(max-width: 1600px)");
var z = window.matchMedia("(max-width: 1300px)");
var y = window.matchMedia("(max-width: 900px)");
var x = window.matchMedia("(max-width: 700px)");

function myFunction4(q) {
    const image = document.querySelector("img");
    const footer = document.querySelector("footer");
    const button = document.querySelector("button");
    const header = document.querySelector("header");
    const h1 = document.querySelector("h1");
    
        if (q.matches) { // If media query matches
            
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = "#D8BFD8";
            document.body.style.color = "black";
            document.body.style.fontSize = "20px";
            h1.style.color = "#800080";
            header.style.paddingBottom = "8vh";
            footer.style.paddingBottom = "10vh";
            
    
        }
      }
      
     
      myFunction4(q) // Call listener function at run time
      q.addListener(myFunction4) // Attach listener function on state changes

function myFunction3(z) {
const image = document.querySelector("img");
const footer = document.querySelector("footer");
const button = document.querySelector("button");
const header = document.querySelector("header");
const h1 = document.querySelector("h1");

    if (z.matches) { // If media query matches
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#5F9EA0";
        document.body.style.color = "black";
        document.body.style.fontSize = "20px";
        h1.style.color = "red";
        image.style.width = "20vw";
        header.style.paddingBottom = "6vh";
        

    }
  }
  
 
  myFunction3(z) // Call listener function at run time
  z.addListener(myFunction3) // Attach listener function on state changes

 function myFunction2(y) {
const image = document.querySelector("img");
const header = document.querySelector("header");

    if (y.matches) { // If media query matches
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#556B2F";
        document.body.style.color = "white";
        document.body.style.fontSize = "18px";
        image.style.width = "35vw";
        header.style.paddingBottom = "6vh";
        

    }
  }
  
 
  myFunction2(y); // Call listener function at run time
  y.addListener(myFunction2); // Attach listener function on state changes

function myFunction(x) {
const image = document.querySelector("img");
const footer = document.querySelector("footer");
const button = document.querySelector("button");
const header = document.querySelector("header");


    if (x.matches) { // If media query matches
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#FFFACD";
        document.body.style.color = "black";
        document.body.style.fontSize = "15px";
        image.style.width = "40vw";
        footer.style.paddingTop = "5vh";
        footer.style.paddingBottom = "5vh";
        button.style.backgroundColor = "white";
        header.style.paddingBottom = "0vh";
        
        
    } 
  }
  
  
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes
 
 
  
 


 



