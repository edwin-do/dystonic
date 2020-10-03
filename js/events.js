var imagesArray = ["brother.jpg", "grandchild1.jpg", "sister.jpg"];
var imagesAlt = ["brother", "grandchild1", "sister"];

document.addEventListener('keydown', logKey);

function logKey(e) {
    console.log(e.code);
  }

function revealAnswer(id){
        var img = document.getElementById(id.toString());
        var ans = document.getElementById("answer");
        if (img.style.display === "none") {
          img.style.display = "block";
        } else {
          img.style.display = "none";
          ans.style.display = "block";
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

function newImage(){
        var img = document.getElementById('q-img');
        var ans = document.getElementById("answer");
        var num = Math.floor(Math.random() * 3);
        img.src = "./img/photos/" + imagesArray[num];
        img.alt = imagesAlt[num];
        img.style.display = "block";
        ans.textContent = img.alt.toString();
        ans.style.display = "none";
      }
