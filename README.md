# cypher-encryption
# Caesar Cipher Web Application

This is a simple web application that demonstrates the Caesar Cipher encryption technique. The Caesar Cipher is a type of substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet. This application allows users to input text and a numeric key, then it outputs the encrypted text based on the Caesar Cipher method.

## Features

- **Text Input:** Users can enter any text they wish to encrypt.
- **Key Input:** Users can provide a numeric key that determines how many positions each letter in the input text will be shifted.
- **Encryption:** The application handles both uppercase and lowercase letters while leaving non-alphabetic characters (like spaces, punctuation, etc.) unchanged.
- **Result Display:** The encrypted text is displayed directly on the web page after the encryption process is completed.

## How to Use

1. **Enter Text:** Type the text you want to encrypt into the "Enter Text" input field.
2. **Enter Key:** Provide a numeric key in the "Enter Key (Number)" input field. This key will be used to shift the letters in your text.
3. **Encrypt:** Click the "Encrypt" button to generate the encrypted text.
4. **View Result:** The encrypted text will appear under the "Encrypted Text" section.

## Code Structure

### HTML

- **`index.html`**: The main HTML file contains the structure of the web page, including input fields, labels, buttons, and the area to display the result.

### CSS

- **Inline CSS**: The styles are included directly within the `<style>` tag in the `index.html` file. These styles manage the appearance of the webpage, including the background color, font sizes, borders, and hover effects.

### JavaScript

- **`cipher.js`**: The JavaScript code handles the encryption logic. It retrieves user input, processes it according to the Caesar Cipher algorithm, and updates the webpage with the encrypted text.

```javascript
function encrypt() {
    let input = document.querySelector("#inputText").value;
    let key = parseInt(document.querySelector("#key").value);
    let cyphertext = "";

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        
        if (element.match(/[A-Z]/)) {
            let code = ((element.charCodeAt(0) - 65 + key) % 26) + 65;
            cyphertext += String.fromCharCode(code);
        } else if (element.match(/[a-z]/)) {
            let code = ((element.charCodeAt(0) - 97 + key) % 26) + 97;
            cyphertext += String.fromCharCode(code);
        } else {
            cyphertext += element;
        }
    }

    document.querySelector("#result").textContent = cyphertext;
}
