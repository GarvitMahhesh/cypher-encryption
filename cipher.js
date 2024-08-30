// function encrypt() {

//     let inputText = document.getElementById("inputText").value;
//     let key = parseInt(document.getElementById("key").value);

   
//     let cipherText = "";
//     for (let i = 0; i < inputText.length; i++) {
//         let char = inputText[i];
//         console.log(char)

      
//         if (char.match(/[A-Z]/)) {
          
//             let code = ((char.charCodeAt(0) - 65 + key) % 26) + 65;
//             cipherText += String.fromCharCode(code);
//         }
    
//         else if (char.match(/[a-z]/)) {
            
//             let code = ((char.charCodeAt(0) - 97 + key) % 26) + 97;
//             cipherText += String.fromCharCode(code);
//         }
       
//         else {
//             cipherText += char;
//         }
//     }

//     document.getElementById("result").textContent = cipherText;
// }

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


    
