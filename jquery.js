// TOTAL SCORE
const sumScore = () => {
  let score = 0;
  $("input[type=radio][data-price]:checked").each(function(i, el) {
    score += +$(el).data("price");
  });
  $("#total").text(score);
}
  
  $("input[type=radio]").on("change", sumScore);
  sumScore();

// RESET BUTTON
const resetScore = () => {
    document.getElementById("total").innerHTML = "0";
}

// COPY BUTTONS

// HTML Copy Button
const htmlContent = async () => {
  let text = document.getElementById('html-comments').innerText;

  try {
    await navigator.clipboard.writeText(text);
    console.log('Copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

// CSS Copy Button
const cssContent = async () => {
  let text = document.getElementById('css-comments').innerText;

  try {
    await navigator.clipboard.writeText(text);
    console.log('Copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

// JavaScript Copy Button
const jsContent = async () => {
  let text = document.getElementById('js-comments').innerText;

  try {
    await navigator.clipboard.writeText(text);
    console.log('Copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

// Accessibility Copy Button
const accessContent = async () => {
  let text = document.getElementById('access-comments').innerText;

  try {
    await navigator.clipboard.writeText(text);
    console.log('Copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

// Design Copy Button
const designContent = async () => {
  let text = document.getElementById('design-comments').innerText;

  try {
    await navigator.clipboard.writeText(text);
    console.log('Copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

// Evaluate Copy Button
const evaluateContent = async () => {
  let text = document.getElementById('evaluate-comments').innerText;

  try {
    await navigator.clipboard.writeText(text);
    console.log('Copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

// Copy All
const copyContent = async () => {

  let text = document.getElementById('comments').innerText;

  try {
    await navigator.clipboard.writeText(text);
    console.log('Copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

// GET LABEL
// const array = $("input").map(function(){
//     return { 
//       label : $(this).prevAll('label:first').text(),
//       val:$(this).val()
//     };
//   }).get();
  
//   console.log(array);

//-------By Value --------
// const sumComments = () => {
//   let comment = 0;
//   $("input[type=radio][value]:checked").each(function(i, el) {
//     comment += +$(el).data("price");
//   });
//   $("#comments").text(comment);
// }
  
//   $("input[type=radio]").on("change", sumComments);
//   sumComments();