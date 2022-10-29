// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance()
  const voiceSelect = document.getElementById("voice-select")
  const talkButton = document.querySelector("#explore button")
  const speakText = document.getElementById("text-to-speak")
  const smiley = document.querySelector("#explore img")

  let voices = []

  talkButton.addEventListener("click", () => {
    utterThis.text = speakText.value
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    smiley.src = "assets/images/smiling-open.png"
    synth.speak(utterThis);
  })

  utterThis.addEventListener("start", () => {
    smiley.src = "assets/images/smiling-open.png"
  })

  utterThis.addEventListener("end", () => {
    smiley.src = "assets/images/smiling.png"
  })

  function populateVoiceList() {
    voices = synth.getVoices();  
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
}