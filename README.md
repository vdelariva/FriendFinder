# FriendFinder

## Purpose: ##

Create a full stack application.

## Description ##

After completing a short survey, the application will save the new person to the friend table and perform a comptability comparision to potential friends already in the application's friend table. The application will then display the name and image of the person that best fits the current survey taker.

## Tools ##

**NPM Libraries**
* express
* body-parser

**Frameworks**
* Bootstrap

## Developer's Notes: ##
* When developing the html, wanted an efficient way to create the survey. The function displaySurvey will create the html for a list of questions stored in the surveyQuestions array. The html is generated and inserted in the div id='survey' tag. The code was written to allow for flexibility and extensibility. The survey can be easily modified by just adding or deleting questions in the surveyQuestions array. No other modificaions to the code are needed.
* Used express.static method to separate static javascript code into a separate file instead of including it in the survey.html file. This keeps the code cleaner by having distinct files for html and js.

## Assets used: ##

Survey questions from http://www.armory.com/tests/nerd500.html
