const alfavit = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let originalTextElement = document.getElementById('original-text');
let encodedTextElement = document.getElementById('encoded-text');
let originalText = originalTextElement.textContent.toLowerCase();
let encodedText = '';
for (let i = 0; i < originalText.length; i++) {
    let char = originalText[i];
    let index = alfavit.indexOf(char);
    if (index === -1) {
        encodedText += char;
        continue;
    }
    let newIndex = (index + 13) % 26;
    encodedText += alfavit[newIndex];
}
encodedTextElement.textContent = encodedText;