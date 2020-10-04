var imagesArray = ["brother.jpg", "grandchild1.jpg", "sister.jpg"];
var imagesAlt = ["brother", "grandchild1", "sister"];

document.addEventListener('keydown', logKey);

function logKey(e) {
    if (e.code == "ArrowRight" | e.code == "ArrowLeft"){
        newImage();
    }
    else if(e.code == "Space"){
        revealAnswer();
    }
  }

function hideIntro(){
    var intro = document.getElementById('intro');
    intro.style.display = "none";
    var btnNav = document.getElementById('btn-nav');
    btnNav.textContent = "Next";
}

function toggleHelp(){
    var help = document.getElementById('help');
    if (help.style.display === "none") {
        help.style.display = "block";
    } else {
        help.style.display = "none";
      }
}

function revealAnswer(){
        var img = document.getElementById("q-img");
        var ans = document.getElementById("answer");
        if (img.style.display === "none") {
          img.style.display = "block";
        } else {
          img.style.display = "none";
          ans.style.display = "block";
          ans.textContent = img.alt.toString();
        }
      }

function PeekImage(){
        var img = document.getElementById('q-img');
        if (img.style.display === "none") {
            img.style.display = "block";
        } else {
            img.style.display = "none";
          }
      }

function newImage(){
    // Select and display new random image 
        var img = document.getElementById('q-img');
        var ans = document.getElementById("answer");
        var num = Math.floor(Math.random() * 3);
        img.src = "./img/photos/" + imagesArray[num];
        img.alt = imagesAlt[num];
        img.style.display = "block";

    // assign new answer to alt and hide it 
        ans.textContent = img.alt.toString();
        ans.style.display = "none";
        hideIntro();
      }
