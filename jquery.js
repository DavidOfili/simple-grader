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