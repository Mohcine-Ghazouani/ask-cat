document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const button = document.querySelector(".button");
  const text = document.querySelector(".text");

  // Create audio objects
  const bellSound = new Audio("./sounds/bell.mp3");
  const thinkingSound = new Audio("./sounds/thinking.mp3");
  const meowSound = new Audio("./sounds/meow.mp3");

  let soundEnabled = true;

  const toggle = document.querySelector(".sound-toggle");
  toggle.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    toggle.textContent = soundEnabled ? "🔊" : "🔈";
  });

  thinkingSound.loop = true;

  const safePlay = async (audio) => {
    if (!soundEnabled) return;
    audio.currentTime = 0;
    await audio.play();
  };



  const animateStart = () => {
    button.style.pointerEvents = "none";

    container.classList.add("animating");
    button.innerHTML = "+";

    text.innerHTML = "";

    setTimeout(() => safePlay(bellSound), 1100);

    setTimeout(() => safePlay(thinkingSound), 3500);

    setTimeout(() => {
      thinkingSound.pause();
      thinkingSound.currentTime = 0;
    }, 10500);

    setTimeout(() => {
      text.innerHTML = "Cat is pondering your question...";
    }, 3300);

    setTimeout(() => {
      text.innerHTML = "Cat has an answer";
    }, 11300);

    setTimeout(() => {
      text.innerHTML = "Cat will now speak";
    }, 13300);

    setTimeout(() => {
      text.innerHTML = "";
    }, 15300);

    setTimeout(() => safePlay(meowSound), 16500);
  };

  button.addEventListener("click", animateStart);
});
