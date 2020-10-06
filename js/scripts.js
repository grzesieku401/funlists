var container = document.querySelector(".container");
    mainlistElements = document.querySelectorAll(".main-list_option")
    mainlistOptionDiv = document.createElement("div");

mainlistOptionDiv.setAttribute("class","main-list_option-div");


// ustaw randomowe tlo dla elementu z eventu
function mouseOverMainListElement(event) {
    var color = randomColor();
    event.target.style="background:"+color;
    mainlistOptionDiv.style="background:"+color;
    container.appendChild(mainlistOptionDiv);
}

//usun element
function mouseLeaveMainListElement(event) {

    container.removeChild(mainlistOptionDiv);
}

//zwroc random color
function randomColor(){
    var colorcomponents = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"],
        colortable = [];
        for (let i = 0; i < 6; i++) {
            colortable.push(colorcomponents[Math.floor(Math.random()*(colorcomponents.length))]);        
        }
    return "#"+colortable.join("");
}

//do kazdego elementu tablicy mainlistElements dodaj eventListener 
for (let i = 0; i < mainlistElements.length; i++) {
    mainlistElements[i].addEventListener("mouseover",mouseOverMainListElement,false);    
    mainlistElements[i].addEventListener("mouseleave",mouseLeaveMainListElement,false);    
}