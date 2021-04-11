function Background(color) {
    document.body.style.background = color;
    alert("Let's play the AKC Non-Sporting Group Breed Lottery!")
 }

function breeds() {
var breeds = ["1. Standard American Eskimo Dog",
  "2. Bichon Frise",
  "3. Boston Terrier",
  "4. Bulldog",
  "5.Chinese Shar-Pei",
  "6. Chow Chow",
  "7. Coton de Tulear",
  "8. Dalmatian",
  "9. Finnish Spitz",
  "10. French Bulldog",
  "11. Keeshond",
  "12. Lhasa Apso",
  "13. Lowchen",
  "14. Norwegian Lundehund",
  "15. Standard Poodle",
  "16. Schipperke",
  "17. Shiba Inu",
  "18. Tibetan Spaniel",
  "19. Tibetan Terrier",
  "20. Standard Xoloitzcuintli"];
var i, len, text;
for (i = 0, len = breeds.length, text = ""; i < len; i++) {
  text += breeds[i] + "<br>";
}
document.getElementById("breeds").innerHTML = text;
}

  function breednumber(){
    var breednumber = Math.floor((Math.random() * 20) + 1);
    
    if (breednumber == 1){
      breed = "Standard American Eskimo Dog";
    } else if (breednumber == 2) {
        breed = "Bichon Frise";
    } else if (breednumber == 3) {
        breed = "Boston Terrier";
    } else if (breednumber == 4) {
        breed = "Bulldog";
      } else if (breednumber == 5) {
        breed = "Chinese Shar-Pei";
      } else if (breednumber == 6) {
        breed = "Chow Chow";
      } else if (breednumber == 7) {
        breed = "Coton de Tulear";
      } else if (breednumber == 8) {
        breed = "Dalmatian";
      } else if (breednumber == 9) {
        breed = "Finnish Spitz";
      } else if (breednumber == 10) {
        breed = "French Bulldog";
      } else if (breednumber == 11) {
        breed = "Keeshond";
      } else if (breednumber == 12) {
        breed = "Lhasa Apso";
      } else if (breednumber == 13) {
        breed = "Lowchen";
      } else if (breednumber == 14) {
        breed = "Norwegian Lundehund";
      } else if (breednumber == 15) {
        breed = "Standard Poodle";
      } else if (breednumber == 16) {
        breed = "Schipperke";
      } else if (breednumber == 17) {
        breed = "Shiba Inu";
      } else if (breednumber == 18) {
        breed = "Tibetan Spaniel";
      } else if (breednumber == 19) {
        breed = "Tibetan Terrier";
    } else {
        breed = "Standard Xoloitzcuintli";
    }
    document.getElementById("breednumber").innerHTML = breed;
    }
    function chances(){
    var x = 1;
    var y = 20;
    var z = x / y;
    document.getElementById("chances").innerHTML = z;
    }