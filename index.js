var start=false;
var level=1;
var colorbox=['green','blue','yellow','red'];
var generateSequence=[];
var chooseColor=[];


$(document).keydown(function(){
    if(start===false)
    {
        start=true;
       
        nextSequence();
    }
});

function nextSequence()
{
    chooseColor=[];
    
    $("h1").text("Level "+level);
    var randomNumber=Math.random();
    randomNumber=randomNumber*4;
    randomNumber=Math.floor(randomNumber);
    
    play(colorbox[randomNumber]);
    $("#"+colorbox[randomNumber]).fadeOut(100).fadeIn(100);
    $("#"+colorbox[randomNumber]).addClass("pressed");
    setTimeout(function(){
        $("#"+colorbox[randomNumber]).removeClass("pressed");
    },100);
    level++;
    generateSequence.push(colorbox[randomNumber]);


}

$(".btn").click(function(){
    var addColor=$(this).attr("id");
    chooseColor.push(addColor);
    checkAnswer(chooseColor.length-1);                                                                                                                                                                                                                                                                                                                                                                                                                        
});

function checkAnswer(len)
{
    if(generateSequence[len]===chooseColor[len])
    {
        console.log("success");
        if(generateSequence.length===chooseColor.length)
    {
        setTimeout(function(){
            nextSequence();
        },1000)
    }

    }
    else{
        console.log("wrong");
       
        $("h1").text("Your score is "+level-1+" Press any key to play new game");
        level=1;
        generateSequence=[];
        start=false;
        $('body').addClass("game-over");
        setTimeout(function(){
            $('body').removeClass("game-over");
        },200);
        play("wrong");
       
        
    }
    
    
}

function play(val)
{
    var file=val+".mp3";
    var audio=new Audio("sounds/"+file);
    audio.play();
}