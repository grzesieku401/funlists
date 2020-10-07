(function(){// dodanie potrzebnych zmiennych
var container = document.querySelector(".container");
    mainlistElements = document.querySelectorAll("ul.main-list_option-ul"),
    lastul = document.querySelector("li");

// obsluga najechania myszka na element glownej listy
function mouseOverMainListElement(event) {
   
    if (lastul==event.target.closest("ul")) {
        return;
    }

    var color = randomColor();
    event.target.closest("ul").style = "background: "+color+"; transition: 1s "

    for (let i = 1; i < event.target.closest("ul").children.length; i++) {
         event.target.closest("ul").querySelectorAll("li")[i].classList.remove("hidden");    
    }

    lastul=event.target.closest("ul");
    event.target.classList.remove("hidden");
}

//obsluga zjechania myszki z elementu glownej listy 
function mouseLeaveMainListElement(event) {
    for (let i = 1; i < event.target.closest("ul").children.length; i++) {
        event.target.closest("ul").querySelectorAll("li")[i].classList.add("hidden");      
   }
   event.target.classList.remove("hidden");
}


//zwraca losowy kolor
function randomColor(){
    var colorcomponents = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"],
        colortable = [];
        for (let i = 0; i < 6; i++) {
            colortable.push(colorcomponents[Math.floor(Math.random()*(colorcomponents.length))]);        
        }
    return "#"+colortable.join("");
}

//zmienia kolor tla body
function everyFew() {
    document.body.style="background: "+randomColor()+ "; transition: 4s; ";
    lastul = null;
}

//do kazdego elementu tablicy mainlistElements dodaj eventListener 
for (let i = 0; i < mainlistElements.length; i++) {

    mainlistElements[i].style = "background: "+randomColor()+"; "
    mainlistElements[i].addEventListener("mouseover",mouseOverMainListElement,true);    
    mainlistElements[i].addEventListener("mouseleave",mouseLeaveMainListElement,false);    
};

window.setInterval(everyFew,5000);})()