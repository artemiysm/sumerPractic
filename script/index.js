const alfavitLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const alfavitUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let button = document.getElementById('encode-button');
let originalTextElement = document.getElementById('original-text');
let encodedTextElement = document.getElementById('encoded-text');

button.addEventListener('click', () => {
  let originalText = originalTextElement.value;
  let encodedText = '';

  for (let i = 0; i < originalText.length; i++) {
    let char = originalText[i];
    let found = false;

    for (let j = 0; j < alfavitLower.length; j++) {
      if (char === alfavitLower[j]) {
        let newIndex = (j + 13) % 26;
        encodedText += alfavitLower[newIndex];
        found = true;
        break;
      }
    }

    if (!found) {
      for (let j = 0; j < alfavitUpper.length; j++) {
        if (char === alfavitUpper[j]) {
          let newIndex = (j + 13) % 26;
          encodedText += alfavitUpper[newIndex];
          found = true;
          break;
        }
      }
    }

    if (!found) {
      encodedText += char;
    }
  }

  encodedTextElement.textContent = encodedText;
});
