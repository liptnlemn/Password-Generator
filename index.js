const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pw1 = document.getElementById("pw1-text-el");

let pw2 = document.getElementById("pw2-text-el");

function generatePW() {
    let tempPassword = "";
    for(let i = 0; i < 16; i++) {
        tempPassword += characters[Math.floor(Math.random() * characters.length)];
    }
    return tempPassword;
}

function renderPW() {
    pw1.innerText = generatePW();
    pw2.innerText = generatePW();
}

