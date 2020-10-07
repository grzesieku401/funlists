// dodanie potrzebnych zmiennych
var container = document.querySelector(".container");
    mainlistElements = document.querySelectorAll(".main-list_option")
    mainlistOptionDiv = document.createElement("div")
    mainlist = document.querySelector(".main-list");


//dodanie klasy dla nowego obiektu
mainlistOptionDiv.setAttribute("class","main-list_option-div");

// obsluga najechania myszka na element glownej listy
function mouseOverMainListElement(event) {

    if (event.target!==this) {
        return;
    }

    var color = randomColor(),
    randomnum = Math.round((Math.random()*4)+1);

    event.target.style="background:"+color;
    mainlistOptionDiv.style="background:"+color+"; width:"+event.target.getBoundingClientRect().width +"px; top:"+(event.target.getBoundingClientRect().top+event.target.getBoundingClientRect().height) +"px; left:"+event.target.getBoundingClientRect().x +"px;";  
    
    for (let i = 0; i < randomnum; i++) {
        var somep = document.createElement("p")
        somep.appendChild(document.createTextNode("Option"+(i+1)));   
        mainlistOptionDiv.appendChild(somep);
    }
    
    container.appendChild(mainlistOptionDiv);
}

//obsluga zjechania myszkki z elementu glownej listy 
function mouseLeaveMainListElement(event) {
    document.
    var allp = document.querySelectorAll(".main-list_option-div p");
    for (let i = 0; i < allp.length; i++) {
        mainlistOptionDiv.removeChild(allp[i]);  
        console.log(i);
    }
    container.removeChild(mainlistOptionDiv);
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


 document.addEventListener("mouseleave",mouseLeaveMainListElement,false);  

//do kazdego elementu tablicy mainlistElements dodaj eventListener 
for (let i = 0; i < mainlistElements.length; i++) {
    mainlistElements[i].addEventListener("mouseover",mouseOverMainListElement,false);    
    mainlistElements[i].addEventListener("mouseleave",mouseLeaveMainListElement,false);    
};