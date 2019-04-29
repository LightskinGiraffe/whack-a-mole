window.onload = function(){

  var dirt = document.getElementsByClassName('dirt');

  var sound = document.getElementById("sound");
  var grid = document.getElementById("dirtbox");
  var score = 0;

  for(let i = 0; i < dirt.length; i++){
      dirt[i].addEventListener("click", function(){
              if (dirt[i].innerHTML){
                  sound.play();
                  dirt[i].innerHTML = "";
                  score++;
                  document.getElementById("score").innerHTML = "Score: " + score;
              } else {
                  console.log("nothing is in there");
              }
          });
      };