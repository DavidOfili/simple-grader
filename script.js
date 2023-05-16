// // Select form element
// const form = document.querySelector('form');

// // Listen for a submit event in the form
// // Also prevent default submit event
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Gather all form data and save in a new object
//     const formData = new FormData(form);

//     // Access form data with an iterator
//     // for (item of formData) {
//     //     console.log(item);
//     // }

//     // Convert formData array into JS object
//     const obj = Object.fromEntries(formData);

//     // Convert obj into JSON string format and display in section
//     const jsonString = JSON.stringify(obj);
//     localStorage.setItem('form', jsonString);

//     // Display above in section
//     window.location.href = "#summary";
// })

// // Summary section receives form data from local storage and converts to JS object
// const json = localStorage.getItem('form');
// const obj = JSON.parse(json);

// for (key in obj) {
//     const html = `
//     <div class="score-details row">
//         <span id="key" class="card col-sm-4 border-0">${key}</span> 
//         <span id="equals" class="card col-sm-1 border-0">=</span> 
//         <span id="object" class="card col-sm-1 border-0">${Number(obj[key])}</span>
//     </div>
//     `;
//     document.getElementById('summary').innerHTML += html;
// }


// DISPLAY COMMENTS
const allComments = () => {
    // HTML Variables
    let checkBox1 = document.getElementById("h1");
    let text1 = document.getElementById("ht1");
    let checkBox2 = document.getElementById("h2");
    let text2 = document.getElementById("ht2");
    let checkBox3 = document.getElementById("h3");
    let text3 = document.getElementById("ht3");
    let checkBox4 = document.getElementById("h4");
    let text4 = document.getElementById("ht4");
    let checkBox5 = document.getElementById("h5");
    let text5 = document.getElementById("ht5");
    let checkBox6 = document.getElementById("h6");
    let text6 = document.getElementById("ht6");
    let checkBox7 = document.getElementById("h7");
    let text7 = document.getElementById("ht7");
    let checkBox8 = document.getElementById("h8");
    let text8 = document.getElementById("ht8");
    let checkBox9 = document.getElementById("h9");
    let text9 = document.getElementById("ht9");
    let checkBox10 = document.getElementById("h10");
    let text10 = document.getElementById("ht10");
    let checkBox11 = document.getElementById("h11");
    let text11 = document.getElementById("ht11");
    let checkBox12 = document.getElementById("h12");
    let text12 = document.getElementById("ht12");

    // CSS Variables
    let checkBox13 = document.getElementById("c1");
    let text13 = document.getElementById("cb1");
    let checkBox14 = document.getElementById("c2");
    let text14 = document.getElementById("cb2");
    let checkBox15 = document.getElementById("c3");
    let text15 = document.getElementById("cb3");
    let checkBox16 = document.getElementById("c4");
    let text16 = document.getElementById("cb4");
    let checkBox17 = document.getElementById("c5");
    let text17 = document.getElementById("cb5");
    let checkBox18 = document.getElementById("c6");
    let text18 = document.getElementById("cb6");
    let checkBox19 = document.getElementById("c7");
    let text19 = document.getElementById("cb7");
    let checkBox20 = document.getElementById("c8");
    let text20 = document.getElementById("cb8");
    let checkBox21 = document.getElementById("c9");
    let text21 = document.getElementById("cb9");
    let checkBox22 = document.getElementById("c10");
    let text22 = document.getElementById("cb10");
    let checkBox23 = document.getElementById("c11");
    let text23 = document.getElementById("cb11");
    let checkBox24 = document.getElementById("c12");
    let text24 = document.getElementById("cb12");
    let checkBox25 = document.getElementById("c13");
    let text25 = document.getElementById("cb13");
    let checkBox26 = document.getElementById("c14");
    let text26 = document.getElementById("cb14");
    let checkBox27 = document.getElementById("c15");
    let text27 = document.getElementById("cb15");

    // JAVASCRIPT Variables
    let checkBox28 = document.getElementById("j1");
    let text28 = document.getElementById("jl1");
    let checkBox29 = document.getElementById("j2");
    let text29 = document.getElementById("jl2");
    let checkBox30 = document.getElementById("j3");
    let text30 = document.getElementById("jl3");
    let checkBox31 = document.getElementById("j4");
    let text31 = document.getElementById("jl4");
    let checkBox32 = document.getElementById("j5");
    let text32 = document.getElementById("jl5");
    let checkBox33 = document.getElementById("j6");
    let text33 = document.getElementById("jl6");
    let checkBox34 = document.getElementById("j7");
    let text34 = document.getElementById("jl7");
    let checkBox35 = document.getElementById("j8");
    let text35 = document.getElementById("jl8");
    let checkBox36 = document.getElementById("j9");
    let text36 = document.getElementById("jl9");
    let checkBox37 = document.getElementById("j10");
    let text37 = document.getElementById("jl10");
    let checkBox38 = document.getElementById("j11");
    let text38 = document.getElementById("jl11");
    let checkBox39 = document.getElementById("j12");
    let text39 = document.getElementById("jl12");
   
    // ACCESSIBILITY Variables
    let checkBox40 = document.getElementById("a1");
    let text40 = document.getElementById("ac1");
    let checkBox41 = document.getElementById("a2");
    let text41 = document.getElementById("ac2");
    let checkBox42 = document.getElementById("a3");
    let text42 = document.getElementById("ac3");
    let checkBox43 = document.getElementById("a4");
    let text43 = document.getElementById("ac4");

    // DESIGN Variables
    let checkBox44 = document.getElementById("d1");
    let text44 = document.getElementById("ds1");
    let checkBox45 = document.getElementById("d2");
    let text45 = document.getElementById("ds2");
    let checkBox46 = document.getElementById("d3");
    let text46 = document.getElementById("ds3");
    let checkBox47 = document.getElementById("d4");
    let text47 = document.getElementById("ds4");
    let checkBox48 = document.getElementById("d5");
    let text48 = document.getElementById("ds5");
    let checkBox49 = document.getElementById("d6");
    let text49 = document.getElementById("ds6");
    let checkBox50 = document.getElementById("d7");
    let text50 = document.getElementById("ds7");
    let checkBox51 = document.getElementById("d8");
    let text51 = document.getElementById("ds8");
    let checkBox52 = document.getElementById("d9");
    let text52 = document.getElementById("ds9");
    let checkBox53 = document.getElementById("d10");
    let text53 = document.getElementById("ds10");
    let checkBox54 = document.getElementById("d11");
    let text54 = document.getElementById("ds11");
    let checkBox55 = document.getElementById("d12");
    let text55 = document.getElementById("ds12");

    // EVALUATION Variables
    let checkBox56 = document.getElementById("e1");
    let text56 = document.getElementById("ev1");
    let checkBox57 = document.getElementById("e2");
    let text57 = document.getElementById("ev2");
    let checkBox58 = document.getElementById("e3");
    let text58 = document.getElementById("ev3");
    let checkBox59 = document.getElementById("e4");
    let text59 = document.getElementById("ev4");
    let checkBox60 = document.getElementById("e5");
    let text60 = document.getElementById("ev5");
    let checkBox61 = document.getElementById("e6");
    let text61 = document.getElementById("ev6");
    let checkBox62 = document.getElementById("e7");
    let text62 = document.getElementById("ev7");
    let checkBox63 = document.getElementById("e8");
    let text63 = document.getElementById("ev8");
    let checkBox64 = document.getElementById("e9");
    let text64 = document.getElementById("ev9");
    let checkBox65 = document.getElementById("e10");
    let text65 = document.getElementById("ev10");
    let checkBox66 = document.getElementById("e11");
    let text66 = document.getElementById("ev11");
    let checkBox67 = document.getElementById("e12");
    let text67 = document.getElementById("ev12");

    // HTML Functions
    if (checkBox1.checked == true) {
        text1.style.display = "block";
    } else {
     text1.style.display = "none";
    }

    if (checkBox2.checked == true) {
        text2.style.display = "block";
    } else {
     text2.style.display = "none";
    }

    if (checkBox3.checked == true) {
        text3.style.display = "block";
    } else {
     text3.style.display = "none";
    }

    if (checkBox4.checked == true) {
        text4.style.display = "block";
    } else {
     text4.style.display = "none";
    }

    if (checkBox5.checked == true) {
        text5.style.display = "block";
    } else {
     text5.style.display = "none";
    }

    if (checkBox6.checked == true) {
        text6.style.display = "block";
    } else {
     text6.style.display = "none";
    }

    if (checkBox7.checked == true) {
        text7.style.display = "block";
    } else {
     text7.style.display = "none";
    }

    if (checkBox8.checked == true) {
        text8.style.display = "block";
    } else {
     text8.style.display = "none";
    }

    if (checkBox9.checked == true) {
        text9.style.display = "block";
    } else {
     text9.style.display = "none";
    }

    if (checkBox10.checked == true) {
        text10.style.display = "block";
    } else {
     text10.style.display = "none";
    }

    if (checkBox11.checked == true) {
        text11.style.display = "block";
    } else {
     text11.style.display = "none";
    }

    if (checkBox12.checked == true) {
        text12.style.display = "block";
    } else {
     text12.style.display = "none";
    }

    // CSS Functions
    if (checkBox13.checked == true) {
        text13.style.display = "block";
    } else {
     text13.style.display = "none";
    }

    if (checkBox14.checked == true) {
        text14.style.display = "block";
    } else {
     text14.style.display = "none";
    }

    if (checkBox15.checked == true) {
        text15.style.display = "block";
    } else {
     text15.style.display = "none";
    }

    if (checkBox16.checked == true) {
        text16.style.display = "block";
    } else {
     text16.style.display = "none";
    }

    if (checkBox17.checked == true) {
        text17.style.display = "block";
    } else {
     text17.style.display = "none";
    }

    if (checkBox18.checked == true) {
        text18.style.display = "block";
    } else {
     text18.style.display = "none";
    }

    if (checkBox19.checked == true) {
        text19.style.display = "block";
    } else {
     text19.style.display = "none";
    }

    if (checkBox20.checked == true) {
        text20.style.display = "block";
    } else {
     text20.style.display = "none";
    }

    if (checkBox21.checked == true) {
        text21.style.display = "block";
    } else {
     text21.style.display = "none";
    }

    if (checkBox22.checked == true) {
        text22.style.display = "block";
    } else {
     text22.style.display = "none";
    }

    if (checkBox23.checked == true) {
        text23.style.display = "block";
    } else {
     text23.style.display = "none";
    }

    if (checkBox24.checked == true) {
        text24.style.display = "block";
    } else {
     text24.style.display = "none";
    }

    if (checkBox25.checked == true) {
        text25.style.display = "block";
    } else {
     text25.style.display = "none";
    }

    if (checkBox26.checked == true) {
        text26.style.display = "block";
    } else {
     text26.style.display = "none";
    }

    if (checkBox27.checked == true) {
        text27.style.display = "block";
    } else {
     text27.style.display = "none";
    }

    // JAVASCRIPT Functions
    if (checkBox28.checked == true) {
        text28.style.display = "block";
    } else {
     text28.style.display = "none";
    }

    if (checkBox29.checked == true) {
        text29.style.display = "block";
    } else {
     text29.style.display = "none";
    }

    if (checkBox30.checked == true) {
        text30.style.display = "block";
    } else {
     text30.style.display = "none";
    }

    if (checkBox31.checked == true) {
        text31.style.display = "block";
    } else {
     text31.style.display = "none";
    }

    if (checkBox32.checked == true) {
        text32.style.display = "block";
    } else {
     text32.style.display = "none";
    }

    if (checkBox33.checked == true) {
        text33.style.display = "block";
    } else {
     text33.style.display = "none";
    }

    if (checkBox34.checked == true) {
        text34.style.display = "block";
    } else {
     text34.style.display = "none";
    }

    if (checkBox35.checked == true) {
        text35.style.display = "block";
    } else {
     text35.style.display = "none";
    }

    if (checkBox36.checked == true) {
        text36.style.display = "block";
    } else {
     text36.style.display = "none";
    }

    if (checkBox37.checked == true) {
        text37.style.display = "block";
    } else {
     text37.style.display = "none";
    }

    if (checkBox38.checked == true) {
        text38.style.display = "block";
    } else {
     text38.style.display = "none";
    }

    if (checkBox39.checked == true) {
        text39.style.display = "block";
    } else {
     text39.style.display = "none";
    }

    // ACCESSIBILITY Functions
    if (checkBox40.checked == true) {
        text40.style.display = "block";
    } else {
     text40.style.display = "none";
    }

    if (checkBox41.checked == true) {
        text41.style.display = "block";
    } else {
     text41.style.display = "none";
    }

    if (checkBox42.checked == true) {
        text42.style.display = "block";
    } else {
     text42.style.display = "none";
    }

    if (checkBox43.checked == true) {
        text43.style.display = "block";
    } else {
     text43.style.display = "none";
    }

    // DESIGN Functions
    if (checkBox44.checked == true) {
        text44.style.display = "block";
    } else {
     text44.style.display = "none";
    }

    if (checkBox45.checked == true) {
        text45.style.display = "block";
    } else {
     text45.style.display = "none";
    }

    if (checkBox46.checked == true) {
        text46.style.display = "block";
    } else {
     text46.style.display = "none";
    }

    if (checkBox47.checked == true) {
        text47.style.display = "block";
    } else {
     text47.style.display = "none";
    }

    if (checkBox48.checked == true) {
        text48.style.display = "block";
    } else {
     text48.style.display = "none";
    }

    if (checkBox49.checked == true) {
        text49.style.display = "block";
    } else {
     text49.style.display = "none";
    }

    if (checkBox50.checked == true) {
        text50.style.display = "block";
    } else {
     text50.style.display = "none";
    }

    if (checkBox51.checked == true) {
        text51.style.display = "block";
    } else {
     text51.style.display = "none";
    }

    if (checkBox52.checked == true) {
        text52.style.display = "block";
    } else {
     text52.style.display = "none";
    }

    if (checkBox53.checked == true) {
        text53.style.display = "block";
    } else {
     text53.style.display = "none";
    }

    if (checkBox54.checked == true) {
        text54.style.display = "block";
    } else {
     text54.style.display = "none";
    }

    if (checkBox55.checked == true) {
        text55.style.display = "block";
    } else {
     text55.style.display = "none";
    }

    // EVALUATION Functions
    if (checkBox56.checked == true) {
        text56.style.display = "block";
    } else {
     text56.style.display = "none";
    }

    if (checkBox57.checked == true) {
        text57.style.display = "block";
    } else {
     text57.style.display = "none";
    }

    if (checkBox58.checked == true) {
        text58.style.display = "block";
    } else {
     text58.style.display = "none";
    }

    if (checkBox59.checked == true) {
        text59.style.display = "block";
    } else {
     text59.style.display = "none";
    }

    if (checkBox60.checked == true) {
        text60.style.display = "block";
    } else {
     text60.style.display = "none";
    }

    if (checkBox61.checked == true) {
        text61.style.display = "block";
    } else {
     text61.style.display = "none";
    }

    if (checkBox62.checked == true) {
        text62.style.display = "block";
    } else {
     text62.style.display = "none";
    }

    if (checkBox63.checked == true) {
        text63.style.display = "block";
    } else {
     text63.style.display = "none";
    }

    if (checkBox64.checked == true) {
        text64.style.display = "block";
    } else {
     text64.style.display = "none";
    }

    if (checkBox65.checked == true) {
        text65.style.display = "block";
    } else {
     text65.style.display = "none";
    }

    if (checkBox66.checked == true) {
        text66.style.display = "block";
    } else {
     text66.style.display = "none";
    }

    if (checkBox67.checked == true) {
        text67.style.display = "block";
    } else {
     text67.style.display = "none";
    }
}

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

//--------------------------------
// var labels = document.getElementsByTagName('LABEL');
// for (var i = 0; i < labels.length; i++) {
//     if (labels[i].htmlFor != '') {
//          var elem = document.getElementById(labels[i].htmlFor);
//          if (elem)
//             elem.label = labels[i];         
//     }
// }

// document.getElementById('MyFormElem').label.innerHTML = 'Look ma this works!';
