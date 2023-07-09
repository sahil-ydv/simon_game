var level = 0;
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var started = false;

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    {
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    }
  } else {
    palySound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game over, Press any key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startover();
  }
}

// this fuction play sounds
function palySound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}
//this fuction change the h1 according to level.
$(document).on("keypress", function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    checkAnswer();
  }

  // $("h1").
});
function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  // alert(randomNumber);
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  palySound(randomChosenColour);
  level++;
  $("#level-title").text("Level " + level);
}
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  // alert(userChosenColour);
  userClickedPattern.push(userChosenColour);
  palySound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});
function startover() {
  level = 0;
  gamePattern = [];
  started = false;
}
