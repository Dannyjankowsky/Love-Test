function calculateLove() {
    var name1 = document.getElementById("name1").value.toLowerCase();
    var name2 = document.getElementById("name2").value.toLowerCase();
    var loveScore = calculateScore(name1, name2);
    displayResult(loveScore);
  }
  
  function calculateScore(name1, name2) {
    var score = 0;
    for (var i = 0; i < name1.length; i++) {
      for (var j = 0; j < name2.length; j++) {
        if (name1[i] === name2[j]) {
          score += 20;
        }
      }
    }
    return score % 101;
  }
  
  function displayResult(loveScore) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>Eure Liebeskompatibilität beträgt " + loveScore + "%!</p>";
  }
  