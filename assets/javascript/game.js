
$(document).ready(function(){
    var Random=Math.floor(Math.random()*101+19);
    // Selects a random number to be shown at the start of the game 
    $("#randomNumber").text(Random);
    console.log(Random);
    // Show random number on the <span id= "randomNumber"></span>.    
    var gemBlue = Math.floor(Math.random()*11+1);
    // generate random hidden value between 1 - 12 and store in gemBlue variable.
    var gemGreen = Math.floor(Math.random()*11+1);
    // generate random hidden value between 1 - 12 and store in gemGreen variable.
    var gemRed = Math.floor(Math.random()*11+1);
    // generate random hidden value between 1 - 12 and store in gemRed variable.
    var gemYellow = Math.floor(Math.random()*11+1);
    // generate random hidden value between 1 - 12 and store in gemYellow variable.
    var playerTotal = 0;
    // store summ of gems selected due $("#gem_xyz").on ('click', function(){.
    var playerWin = 0;
    // store number of player wins.
    var playerLosses = 0;
    // store number of player losses.
    console.log(playerWin);



    function score(){
        // Wins and losses function
        if(playerTotal === Random){
            // conditional test for winning situation.
            playerWin++;
            // increment winning score.
            $("#number_of_Wins").text(playerWin);
            // shows playerWin variable in <span id= "number_of_Wins"></span>.
            jQuery.noConflict(); 
            // If for some reason two versions of jQuery are loaded, calling $.noConflict( true ) from the second version will return the globally scoped jQuery variables to those of the first version.
            $("#result").html("<p>"+"You won!!"+"</p>");
            // change Html modal header to won.
            $('#myModal').modal('show');
            // show modal.
            
        };

        if(playerTotal > Random){
            //conditional test for losing situation.
            playerLosses++;
            // increment losing score.
            $("#number_of_Losses").text(playerLosses);
            // shows playerLosses variable in <span id= "number_of_Losses"></span>
            jQuery.noConflict(); 
            // If for some reason two versions of jQuery are loaded, calling $.noConflict( true ) from the second version will return the globally scoped jQuery variables to those of the first version.
            $("#result").html("<p>"+"You lose!!"+"</p>");
            // change Html modal header to lose.
            $('#myModal').modal('show'); 
            // show modal.
            console.log(playerTotal);
           
        };
    };


    $("#number_of_Wins").text(playerWin);
    // Show winning score.
    $("#number_of_Losses").text(playerLosses);
    // show lossing score.
    $("#gem_blue").on ('click', function(){
        // on click blue gem.
        playerTotal = playerTotal + gemBlue;
        // add gemBlue to playerTotal.
        $("#myTotal").text(playerTotal);
        // show player total @ <span id="myTotal"></span>
        score();
        // call function score.

    });
    $("#gem_yellow").on ('click', function(){
        playerTotal = playerTotal + gemYellow;
        $("#myTotal").text(playerTotal);
        score();
        

    });
    $("#gem_green").on ('click', function(){
        playerTotal = playerTotal + gemGreen;
        $("#myTotal").text(playerTotal);
        score();
        

    });
    $("#gem_red").on ('click', function(){
        playerTotal = playerTotal + gemRed;
        $("#myTotal").text(playerTotal);
        score();
        

    });

    function resetgame(){
        playerTotal = 0;
        Random=Math.floor(Math.random()*101+19);
        gemBlue = Math.floor(Math.random()*11+1);
        gemGreen = Math.floor(Math.random()*11+1);
        gemRed = Math.floor(Math.random()*11+1);
        gemYellow = Math.floor(Math.random()*11+1);
        $("#myTotal").text(playerTotal);
        $("#randomNumber").text(Random);
        console.log(playerTotal,Random,)
       };

       $("#play-again").on ('click', function(){
       // modal play-again id on click..
        resetgame();
        // call resetgame function.

    });
    
    });       