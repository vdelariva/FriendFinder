
// Survey Questions
// ____________________________________________________________________________________

var surveyQuestions = [

  "I like science fiction.",
  "I like to read technology news reports.",
  "I have played a lot of video games.",
  "I sometimes prefer fictional people to real ones.",
  "I spend recreational time researching topics others might find dry or overly rigorous.",
  "I spend more time at the library than any other public place.",
  "I like to play RPGs. (Ex. D&D)",
  "I can be socially awkward at times.",
  "I have started writing a novel.",
  "I care about super heroes."
]

// Main Function
// ____________________________________________________________________________________
console.log("load app.js")
displaySurvey();


// ____________________________________________________________________________________
// Functions
// ____________________________________________________________________________________

function displaySurvey () {

   // Display Survey

   for (var i = 0; i < surveyQuestions.length; i++) {
       $("#survey").append(
       `<h4 id = ${i+1}class="font-weight-bold">Question ${i+1}</h4>`
       +   `<h6>${surveyQuestions[i]}</h6>`
       +   `<select id ="q1" class="custom-select custom-select-sm" style="width: 15%">`
       +   `<option selected>Select an Option</option>`
       +   `<option value="1">1 (Strongly Disagree</option>`
       +   `<option value="2">2</option>`
       +   `<option value="3">3</option>`
       +   `<option value="4">4</option>`
       +   `<option value="5">5 (Strongly Agree)</option>`
       +   `</select><br><br>`
       );
   }
}