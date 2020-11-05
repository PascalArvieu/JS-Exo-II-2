//Exercice II - 3

document.getElementById("coco19").onclick = function bigger() {
     var largeurCoco = document.getElementById("coco19").clientWidth;
     // stocke la largeur de l'image

     if (largeurCoco <= 400) {
          document.getElementById("coco19").style.width = largeurCoco + 50 + "px";
     }

     else {
          document.getElementById("coco19").style.width = 100 + "px";
     }
}



// var largeurCoco = document.getElementById("coco19").Width;


// document.getElementById("coco19").onclick = function bigger() {
//      if (largeurCoco == "100px") {
//           largeurCoco == "300px";
//      }

//      else {
//           largeurCoco == "100px";
//      }
// }




// var b = 0;
// function fifo() {
//      if (b == 0) {
//           document.getElementById("coco19").width = "300";
//           b = 1;
//      }
//      else {
//           document.getElementById("coco19").width = "100";
//           b = 0;
//      }
// } 
