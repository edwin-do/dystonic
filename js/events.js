
function revealAnswer(id){
        var img = document.getElementById(id.toString());
        var ans = document.getElementById("answer");
        if (img.style.display === "none") {
          img.style.display = "block";
        } else {
          img.style.display = "none";
          ans.textContent = img.alt.toString();
        }
      }

function showImage(){
        var img = document.getElementById('q-img');
          img.style.display = "block";
      }

function hideImage(){
        var img = document.getElementById('q-img');
          img.style.display = "none";
      }


//   $( document ).ready(function() {
//     var menu = $('#menu');
//     var myNav = $('#myNav');
//     menu.click(function() {
//         myNav.toggleClass('open');
//        return false;
//     });
//   });