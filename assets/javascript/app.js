$(document).ready(function() {

// Initialize variables

var numCorrect = 0;
var numIncorrect = 0;
var timeout = 3;
var interval;

// Nested objects for trivia Q&As

// Array 
var trivia = [

        {
               question: "What Pot of food of food does Kevin spill in Casual Friday ep?",
               choices: ["Chilli","Chicken Noodle Soup", "Fried Rice", "Cereal"],
               answers: "Chilli"
        },
        {
                question: "What Pot of food of food does Kevin spill in Casual Friday ep?",
                choices: ["Chilli","Chicken Noodle Soup", "Fried Rice", "Cereal"],
                answers: "Chilli"
         },
         {
                question: "What Pot of food of food does Kevin spill in Casual Friday ep?",
                choices: ["Chilli","Chicken Noodle Soup", "Fried Rice", "Cereal"],
                answers: "Chilli"
         },
         {
                question: "What Pot of food of food does Kevin spill in Casual Friday ep?",
                choices: ["Chilli","Chicken Noodle Soup", "Fried Rice", "Cereal"],
                answers: "Chilli"
         }
]

// var trivia = {
//         questions: {
//                 q1: "What Pot of food of food does Kevin spill in Casual Friday ep?",
//                 q2: "How many siblings does Dwight have?",
//                 q3: "What is the name of the movie Michael wrote and directed?",
//                 q4: "What is the name of the cat Andy gets for Angela after she breaks up with Dwight?",
//                 q5: "What is the name of Oscar's first boyfriend?",
//                 q6: "What food does Ryan burn, causing an office fire?",
//                 q7: "Who does Michael run over with his car?",
//                 q8: "What did Kelly do to lose weight for the Dunder Mifflin weight loss contest?",
//                 q9: "What is Stanley's life goal and dream?",
//                 q10: "Whose stand up routine does Michael do in Diversity Day ep?"
//         },
//         choices: {
//                 q1: ["Chilli","Chicken Noodle Soup", "Fried Rice", "Cereal"],
//                 q2: ["None", "1 Brother & 1 Sister", "5 Sisters", "1 Brother"],
//                 q3: ["Dundy Miffy", "Thread Level Midnight", "Michael Scott Show", "World's Best Boss"],
//                 q4: ["Pundit", "Andela", "Garbage/Bandit", "Trash"],
//                 q5: ["Gil", "Dwight", "Creed", "Bill"],
//                 q6: ["Lasagna", "Cheesy Pita", "Burrito", "Creme Brule"],
//                 q7: ["Jim", "Meredith", "Pam", "Jan"],
//                 q8: ["Starve", "Keto-Diet", "Eat a Tapeworm", "Eat Dirt"],
//                 q9: ["Quit", "To Own a Lighthouse and Live at the Top of It", "Have 50 Grandchildren", "Be a Supermodel"],
//                 q10: ["Jerry Seinfeld", "Chris Rock", "Dave Chappelle", "Ali Wong"]
//         },
//         answers: {
//                 q1: "Chilli",
//                 q2: "1 Brother & 1 Sister",
//                 q3: "Thread Level Midnight",
//                 q4: "Garbage/Bandit",
//                 q5: "Gil",
//                 q6: "Cheesy Pita",
//                 q7: "Meredith",
//                 q8: "Eat a Tapeworm",
//                 q9: "To own a lighthouse and live at the top of it",
//                 q10: "Chris Rock"             
//         }
// }
   
    // Set up game
    $(".content").hide();

    // Click handler for start button
    $("#startBtn").on('click', function(e) {
        e.preventDefault();
        $(".start").hide();
        $(".content").show();
        $("#timer").text(timeout);
        interval = setInterval(countDown, 1000);
        playTrivia();
    });

    // Trivia Game
    function playTrivia() {
        for (var i = 0; i < trivia.length; i++) {
                var qDiv = $("<div>");
                var question = trivia[i].question;
                qDiv.append("<p>Question: " + question + "</p>");

                for (var j = 0; j < trivia[i].choices.length; j++){
                        qDiv.append("<input type='radio' name='choice"+i+"'>" + trivia[i].choices[j] + "</input><br>");   
                }
                $(".trivia").append(qDiv);  
        }
        
        }

        // Submit button handler

    // Set countdown function
    function countDown() {
            timeout --;
            $("#timer").html(timeout);
            if (timeout == 0) {
                    clearInterval(interval);
                    checkAnswer();
            }
    }

    //function show()

    // Function to check answers
     function checkAnswer(){
        $.each($("input[name=choice0]:checked"),functon(){

                
        }) // each syntax
        // puts input into an array
        

                


        


     }

    // Reveal number of correct and incorrect answers
//     function displayResults(){

//     }




});