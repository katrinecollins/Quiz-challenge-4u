function printScores() {
    var scores = JSON.parse(window.localStorage.getItem("scores")) || [];

    scores.sort(function (a, b) {
        return b.scores - a.scores;
    });

    scores.forEach(function(scores) {
        var liTag = document.createElement("li");
        liTag.textContent = scores.initials + " - " + scores.scores;
    
        var olEl = document.getElementById("scores");
        olEl.appendChild(liTag);
      });
    }
    function clearScores() {
        window.localStorage.removeItem("scores");
        window.location.reload();
      }
      
      document.getElementById("clear").onclick = clearScores;
     
      printScores();