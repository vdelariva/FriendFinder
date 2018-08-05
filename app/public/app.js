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

// Display the survey questions

displaySurvey();

// When form submit button pressed

$(".submit").on("click", (event) => {
    event.preventDefault();

    // Get input from survey
    let newFriend = getsurveyAnswers()

    // Add new friend to friend data array
    $.post("/api/friends", newFriend);

    // Get all possible friends from list
    $.get("/api/friends", (data) => {
        findFriend(newFriend,data);
    })
});


// ____________________________________________________________________________________
// Functions
// ____________________________________________________________________________________

function displaySurvey () {

   // Display Survey

   for (var i = 0; i < surveyQuestions.length; i++) {
       $("#survey").append(
       `<h4 class="font-weight-bold">Question ${i+1}</h4>`
       +   `<h6>${surveyQuestions[i]}</h6>`
       +   `<select id = "q${i}" class="custom-select custom-select-sm" style="width: 15%">`
       +   `<option selected value="3">Select an Option</option>`
       +   `<option value="1">1 (Strongly Disagree</option>`
       +   `<option value="2">2</option>`
       +   `<option value="3">3</option>`
       +   `<option value="4">4</option>`
       +   `<option value="5">5 (Strongly Agree)</option>`
       +   `</select><br><br>`
       );
   }
}

// ____________________________________________________________________________________

function getsurveyAnswers(){

    let scores = [];
    // Get the responses from each of the survey questions
    for ( var i=0; i<surveyQuestions.length; i++){
        scores[i] = $(`#q${i}`).val();
    }

    // Assign to friend object
    let friend = {
    friendName: $("#friendName").val().trim(),
    photo: $("#photo").val().trim(),
    scores: scores
    };

    // Reset the form
    $("form")[0].reset();
    return friend;
}
// ____________________________________________________________________________________

function findFriend(friend,friendData){
    let ix = 0;
    let friendScore = 4 * friendData.length; // maximum score for two people who are polar opposite
    let c = [] // temporary array to hold friend score calcuation

    // Calculate friend score with each possible friend in the array
    // Don't compare with last added item since that's the current friend
    for (j=0; j<friendData.length-1; j++){
        // Calculate the difference between each survey response, loop through each possible friend
        c = friend.scores.map( (v, i)  =>{ return Math.abs(v - friendData[j].scores[i]); });

        // Add all difference values to create a friend score
        var sum = c.reduce((c, b) => { return c + b; }, 0);
        
        // The lower the friend score, the more compatible the two people are, keep the lower score
        if ( sum < friendScore) {
            friendScore = sum;
            ix = j;
        }
        // console.log(`friendscore: ${friendScore} ix: ${ix}`);

        $(".modal-title").text(`Your new possible friend is:`);
        $(".modal-body").html(`<h4>${friendData[ix].friendName}</h4><img src="${friendData[ix].photo}" alt="New Friend">`);
    }
}

// ____________________________________________________________________________________
