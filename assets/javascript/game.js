
$(document).ready(function(){

    var Random=Math.floor(Math.random()*101+19);
    // Selects a random number to be shown at the start of the game

    
    $("#randomNumber").text(Random);
    console.log(Random);
    // Select a random number added 
    
    var gemBlue = Math.floor(Math.random()*11+1);
    var gemGreen = Math.floor(Math.random()*11+1);
    var gemRed = Math.floor(Math.random()*11+1);
    var gemYellow = Math.floor(Math.random()*11+1);
    var playerTotal = 0;
    var playerWin = 0;
    var playerLosses = 0;
    
    console.log(playerWin);



    function score(){

        if(playerTotal === Random){
            playerWin++;
            $("#number_of_Wins").text(playerWin);
            jQuery.noConflict(); 
            $("#result").html("<p>"+"You wow!!"+"</p>");
            $('#myModal').modal('show');
            resetgame();
        };

        if(playerTotal > Random){
            playerLosses++;
            $("#number_of_Losses").text(playerLosses);
            jQuery.noConflict(); 
            $("#result").html("<p>"+"You lose!!"+"</p>");
            $('#myModal').modal('show'); 
            console.log(playerTotal);
            resetgame();
        };
    };


    $("#number_of_Wins").text(playerWin);
    $("#number_of_Losses").text(playerLosses);

    $("#gem_blue").on ('click', function(){
        playerTotal = playerTotal + gemBlue;
        $("#myTotal").text(playerTotal);
        score();

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
    
});