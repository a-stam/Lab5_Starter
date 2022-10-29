// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  let hornImage = document.querySelector("#expose img");
  let dropDown = document.getElementById("horn-select");
  let volumeSlider = document.querySelector("#volume");
  let playSoundButton = document.querySelector("#expose button");
  let hornAudio = document.querySelector("#expose audio");
  let volumeImage = document.querySelector("#volume-controls img");
  const jsConfetti = new JSConfetti();

  hornAudio.volume = volumeSlider.value / 100;

  dropDown.addEventListener("change", () => {
    hornImage.src = "assets/images/" + dropDown.value + ".svg";
    hornAudio.src = "assets/audio/" + dropDown.value + ".mp3";
  });

  playSoundButton.addEventListener("click", () => {
    hornAudio.play();
    if (dropDown.value === "party-horn") jsConfetti.addConfetti();
  });

  volumeSlider.addEventListener("input", () => {
    let volume = volumeSlider.value;
    hornAudio.volume = volume / 100;
    if (volume == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if (volume >= 1 && volume < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (volume >= 33 && volume < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  });
}
