// Survey questions

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

    // $("#schedule > tbody").append("<tr id="+snapshot.key+">" 
    // + "<th scope='row'><i class='fas fa-train' style='color:#619B83'></i></th>"
    // + "<td>" + snapshot.val().trainName + "</td>" 
    // + "<td>" + snapshot.val().destination + "</td>" 
    // + "<td>" + parseInt(snapshot.val().frequency) + "</td>" 
    // + "<td class='arrTime' data-key="+snapshot.key+">" + moment().add(minToA,"minutes").format("HH:mm") + "</td>"
    // + "<td class='mins' data-key="+snapshot.key+">" + minToA +  "</td>"
    // + "<td><i class='far fa-edit edit' data-key="+snapshot.key+"></i></td>"
    // + "<td><i class='far fa-trash-alt trash' data-key="+snapshot.key+"></i></tr>")
}
console.log("load js");
displaySurvey();
