let isSetTimmeoutRunning = false;
function startCountdown() {
  if (isSetTimmeoutRunning == false) {
    isSetTimmeoutRunning = true;
    let userInput = Number(
      document.getElementById("userInput").value
    );
    let userMilliseconds = userInput * 1000;
    setTimeout(function () {
      isSetTimmeoutRunning = false;
      alert(userInput + " seconds have passed.");
    }, userMilliseconds);
    let counter = userInput;
    document.getElementById("countdown-text").innerHTML =
      "<b>" + counter + "</b>";
    let interval = setInterval(function () {
      counter--;
      document.getElementById("countdown-text").innerHTML =
        "<b>" + counter + "</b>";
      if (counter == 0) {
        document.getElementById(
          "countdown-text"
        ).innerHTML = "";
        clearInterval(interval);
      }
    }, 1000);
  }
}
