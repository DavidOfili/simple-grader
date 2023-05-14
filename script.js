// Select form element
const form = document.querySelector('form');

// Listen for a submit event in the form
// Also prevent default submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gather all form data and save in a new object
    const formData = new FormData(form);

    // Access form data with an iterator
    // for (item of formData) {
    //     console.log(item);
    // }

    // Convert formData array into JS object
    const obj = Object.fromEntries(formData);

    // Convert obj into JSON string format and display in section
    const jsonString = JSON.stringify(obj);
    localStorage.setItem('form', jsonString);

    // Display above in section
    window.location.href = "#summary";
})

// Summary section receives form data from local storage and converts to JS object
const json = localStorage.getItem('form');
const obj = JSON.parse(json);

for (key in obj) {
    const html = `
    <div class="summary-grid">
        <span>${key}</span> <span>=</span> <span>${Number(obj[key])}</span>
    </div>
    `;
    document.getElementById('summary').innerHTML += html;
}

// DISPLAY COMMENTS
var labels = document.getElementsByTagName('LABEL');
for (var i = 0; i < labels.length; i++) {
    if (labels[i].htmlFor != '') {
         var elem = document.getElementById(labels[i].htmlFor);
         if (elem)
            elem.label = labels[i];         
    }
}

document.getElementById('MyFormElem').label.innerHTML = 'Look ma this works!';

// function myFunction() {
//     // HTML Variables
//     let checkBox1 = document.getElementById("q1");
//     let text1 = document.getElementById("h1");
//     let checkBox2 = document.getElementById("q2");
//     let text2 = document.getElementById("h2");
//     let checkBox3 = document.getElementById("q3");
//     let text3 = document.getElementById("h3");

//     // CSS Variables
//     let checkBox4 = document.getElementById("p1");
//     let text4 = document.getElementById("c1");
//     let checkBox5 = document.getElementById("p2");
//     let text5 = document.getElementById("c2");
//     let checkBox6 = document.getElementById("p3");
//     let text6 = document.getElementById("c3");

//     // HTML Functions
//     if (checkBox1.checked == true) {
//         text1.style.display = "block";
//     } else {
//      text1.style.display = "none";
//     }

//     if (checkBox2.checked == true) {
//         text2.style.display = "block";
//     } else {
//      text2.style.display = "none";
//     }

//     if (checkBox3.checked == true) {
//         text3.style.display = "block";
//     } else {
//      text3.style.display = "none";
//     }

//     // CSS Functions
//     if (checkBox4.checked == true) {
//         text4.style.display = "block";
//     } else {
//      text4.style.display = "none";
//     }

//     if (checkBox5.checked == true) {
//         text5.style.display = "block";
//     } else {
//      text5.style.display = "none";
//     }

//     if (checkBox5.checked == true) {
//         text5.style.display = "block";
//     } else {
//      text5.style.display = "none";
//     }
// }

// let btn = document.getElementById('submit');
// let scoreForm = document.forms['score-form'].getElementsByClassName('score');
// let valueArr = [];

// // Onclick handler to prevent default form behaviour
// btn.onclick = function(e) {
//   e.preventDefault();
//   getFormValues();
// }

// // Retrieve form data
// function getFormValues() {
//  for (var x of scoreForm){
//   valueArr.push({KeyPoint:x.name , Mark:x.value})
//  }

//  document.getElementById('comments').innerHTML = valueArr;
// //  console.log(valueArr);
// }

