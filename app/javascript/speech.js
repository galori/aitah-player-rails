document.addEventListener('DOMContentLoaded', function() {
  const speaks = document.querySelectorAll('.speak');
  speaks.forEach(function(speak) {

    const utterance = new SpeechSynthesisUtterance();

    utterance.text = speak.textContent;
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;

    // // get all voice names
    speechSynthesis.getVoices().map(function(voice) {
      return voice.name;
    });

    // set to Fiona voice
    utterance.voice = speechSynthesis.getVoices().find(function(voice) {
      return voice.name === 'Fiona';
    });

    console.log(utterance.voice);
    window.speechSynthesis.speak(utterance);
  });
});

