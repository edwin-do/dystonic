var imagesArray = ["brother.jpg", "grandchild1.jpg", "grandchild2.jpg","neice1.jpg","neice2.jpg", "neice3.jpg","nephew1.jpg","nephew2.jpg","sister.jpg"];
var imagesAlt = ["Tam - Brother", "Cheryl - Grandchild", "Edward - Grandchild", "Bonnie - Niece", "Cynthia - Niece", "Jess - Niece", "Joe - Nephew", "Kevin - Nephew", "Ming - Sister"];

document.addEventListener('keydown', logKey);

function logKey(e) {
  // keyboard events
    if (e.code == "ArrowRight" | e.code == "ArrowLeft"){
        newImage();
    }
    else if(e.code == "Space"){
        revealAnswer();
    }
  }

function hideIntro(){
    // hide the Intro section
    var intro = document.getElementById('intro');
    intro.style.display = "none";
    var btnNav = document.getElementById('btn-nav');
    btnNav.textContent = "Next";
    document.getElementById("title").textContent = "Who is this?";
}

function toggleHelp(){
    //show/hide the help section
    var help = document.getElementById('help');
    if (help.style.display === "none") {
        help.style.display = "block";
    } else {
        help.style.display = "none";
      }
}

function revealAnswer(){
        // display the answer and hide image
        var img = document.getElementById("q-img");
        var ans = document.getElementById("answer");
        if (img.style.display === "none") {
          img.style.display = "block";
          ans.style.display = "none";
        } else {
          img.style.display = "none";
          ans.style.display = "block";
          ans.textContent = img.alt.toString(); 
        }
      }

function PeekImage(){
        // peek image when mouse is over
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
        var num = Math.floor(Math.random() * 9);
        img.src = "./img/photos/" + imagesArray[num];
        img.alt = imagesAlt[num];
        img.style.display = "block";

    // assign new answer to alt and hide it 
        ans.textContent = img.alt.toString();
        ans.style.display = "none";
        hideIntro();
      }
