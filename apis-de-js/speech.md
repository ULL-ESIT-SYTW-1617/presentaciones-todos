# 3. Web Speech API

La Web Speech API proporciona dos áreas de funcionalidad distintas: el reconocimiento de voz y la síntesis de voz (también conocido como texto a voz, o tts), que abren nuevas posibilidades interesantes para la accesibilidad.

```Javascript
var speaker = new SpeechSynthesisUtterance();
speaker.voice = 'Google Español';
speaker.lang = 'es-ES';
speaker.text = 'Texto de prueba';
speechSynthesis.speak(speaker);
speechSynthesis.getVoices();
```
