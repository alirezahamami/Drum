


    function makesound(input) {
      switch (input) {
        case "a":
          var tom1 = new Audio('tom-1.mp3');
          tom1.play();

        case "l":
          var tom2 = new Audio('tom-2.mp3');
          tom2.play();

        case "i":
          var tom3 = new Audio('tom-3.mp3');
          tom3.play();

        case "r":
          var tom4 = new Audio('tom-4.mp3');
          tom4.play();

        case "e":
          var tom5 = new Audio('snare.mp3');
          tom5.play();

        case "z":
          var tom6 = new Audio('kick-bass.mp3');
          tom6.play();

        case "x":
          var tom7 = new Audio('crash.mp3');
          tom7.play();

          break;
        default:
      }
    }

    function anim(curr){
      document.querySelector("."+curr).classList.add("pressed");
      setTimeout(function(){
        document.querySelector("."+curr).classList.remove("pressed");
      }, 200);
      }

    var but = document.querySelectorAll("button")
    for (i = 0; i < but.length; i++) {
      but[i].addEventListener("click", function() {
        makesound(this.innerHTML);
        anim(this.innerHTML);
      })}




    document.addEventListener("keypress", function(e) {
          makesound(e.key);
          anim(e.key);
        })
