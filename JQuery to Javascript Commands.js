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

/*---------------------------------------------------------/
/hide and show. Kahit anong valid DOM selector should work /
/---------------------------------------------------------*/
// .hide() ---------------------------
// IDs 
document.getElementById("id").style.display = "none";
// .show() ---------------------------
// IDs
document.getElementById("id").style.display = "block";

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


// CLASSES 
const classes = document.getElementsByClassName("class");
for (let i = 0; i < classes.length; i++) {
    classes[i].style.display = "block";
}

/* -- DATA STRUCTURES --- */
// ITERATING THROUGH DATA STRUCTURES (o ung nagfofor loop ka ganun pero hindi direct na for)
// jQuery:
$("Any valid DOM selector").each(function(){})

// vanilla
// through a variable or constant
const domSelector = document.getElementsByClassName("exampleClass");
domSelector.forEach((item) => {
    // handle each item here
    // ung 'item' is the current item iteration, kind of like domSelector[i] pag regular for loop
});
