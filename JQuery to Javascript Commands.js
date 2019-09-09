// ------------- JQUERY functions to JAVASCRIPT (ALPHABETICAL ORDER) ---------------
// $(document).ready() 
function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    document.getElementById('getInvoices').addEventListener('click', () => {
        getInvoices();
    });
});

// $.getJSON w/ promise
const requestJSON = function requestJSON(url) {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                let data = JSON.parse(this.response);
                resolve(data);
            } else {
                reject(err);
            }
        };

        request.onerror = function() {
            reject(err);
        };

        request.send();
    });
}

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
        while (parent[i].firstChild) {
            parent[i].removeChild(parent[i].firstChild);
        }
    }
}
// OR 
// IDs 
document.getElementById("id").innerHTML = "";

// CLASSES 
const classes = document.getElementsByClassName("class").innerHTML = "";
for(let i = 0; i < classes.length; i++) {
    classes[i].innerHTML = "";
}

// OR
const accContainerMobile = document.querySelectorAll(".accordion");
while (accContainerMobile.firstChild) {
    accContainerMobile.removeChild(accContainerMobile.firstChild);
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

/*-------------------------/
/ -- DATA STRUCTURES ---- /
/------------------------*/
// ITERATING THROUGH DATA STRUCTURES (o ung nagfofor loop ka ganun pero hindi direct na for)
// jQuery:
$("Any valid DOM selector").each(function(){
    // handle each item  here
})

// vanilla
// through a variable or constant
const domSelector = document.getElementsByClassName("exampleClass");
domSelector.forEach((item) => {
    // handle each item here
    // ung 'item' is the current item iteration, kind of like domSelector[i] pag regular for loop
});

/* ---- Getting or manipulating HTML --------*/
// mga append append
// jQUery
$("#accordion").append("<div class='card my-3 text-center noData'><h1>You have no Tasks. Do something today!</h1></div>");

// vanilla, ung html naka constant kasi minsan masyadong mahaba na bago ilagay sa parenthesis
const accordionEmpty = document.getElementById("accordion");
const noData = "<div class='card my-3 text-center noData'><h1>You have no Tasks. Do something today!</h1></div>";
accordionEmpty.insertAdjacentHTML("beforeend", noData);

/*------- Getting the index or value sa selected option in a <select> block -- */
// jQuery
$("#requestGeneratedVia select option:selected");

// javascript
document.getElementById("requestGeneratedVia").options[document.getElementById("requestGeneratedVia").selectedIndex]
// --> to get the value, just add .value or .textContent depending on what you need
// END of <select>




//drag and drop
example:
const dragLeave = function dragLeave() {
    this.classList.remove("draggedOver");
};

const drop = function drop(e) {
    this.classList.remove("draggedOver");

    const selectC = document.getElementsByClassName("selectedChild");
    document.getElementById(`${this.getAttribute("id")}`).appendChild(selectC[0]);
};

const dragEnd = function dragEnd(username) {
    const elem = document.getElementsByClassName("selectedChild");

    for (let i = 0; i < elem.length; i++) {
        const movedTask = elem[i].getAttribute("parent-id");
        const parentName = elem[i].parentElement.getAttribute("id");
        const userID = document.getElementById(`${parentName}`).parentNode.getAttribute("id");

        if (movedTask !== parentName) {
            const taskId = elem[i].getAttribute("task-id");
            const myTableEdit = new ECP.EC_TableEdit("Tasks");

            elem[i].setAttribute("parent-id", parentName);
            elem[i].setAttribute("class", `child bg-white text-dark ${parentName}`);

            myTableEdit.EditRecord(taskId);
            myTableEdit.UpdateRecord("AssignToUserID", userID);

            myTableEdit.SaveRecord().then(() => {
                getToast("success", taskId);
            }).catch(() => {
                getToast("failed", taskId);
            });
        }
    }
};

const dragDropParents = function dragDropParents(parents) {
    for (let i = 0; i < parents.length; i++) {
        parents[i].addEventListener("dragover", dragOver);
        parents[i].addEventListener("dragleave", dragLeave);
        parents[i].addEventListener("drop", drop);
    }
};

const dragDropChildren = function dragDropChildren(children) {
    for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("dragstart", dragStart);
        children[i].addEventListener("dragend", dragEnd);
    }
};
//end of drag and drop

