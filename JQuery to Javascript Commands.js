// ------------- JQUERY functions to JAVASCRIPT (ALPHABETICAL ORDER) ---------------


//  .addClass() ------------------------ 
//  IDS
document.getElementById("id").classList.add("newClass");

//  CLASSES 
const classes = document.getElementsByClassName("class");
for (let i = 0; i < classes.length; i++) {
    classes[i].classList.add("newClass");
}

// .empty() ------------------------
const emptyChildren = function(parent) {
    for (let i = 0; i < parent.length; i++) {
        while (parent[0].firstChild) {
            parent[0].removeChild(parent[0].firstChild);
        }
    }
}

// .hide() ---------------------------
// IDs 
document.getElementById("id").style.display = "none";

// CLASSES
const classes = document.getElementsByClassName("class");
for (let i = 0; i < classes.length; i++) {
    classes[i].style.display = "none";
}

//  .removeClass() ------------------------ 
//  IDS
document.getElementById("id").classList.remove("newClass");

//  CLASSES 
const classes = document.getElementsByClassName("class");
for (let i = 0; i < classes.length; i++) {
    classes[i].classList.remove("newClass");
}

// .show() ---------------------------
// IDs
document.getElementById("id").style.display = "block";

// CLASSES 
const classes = document.getElementsByClassName("class");
for (let i = 0; i < classes.length; i++) {
    classes[i].style.display = "block";
}