const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
                   "V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
                   "q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
                   "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
                   ",","|",":",";","<",">",".","?","/"];

let generateButton = document.getElementById("generate");
let passwordEl1 = document.getElementById("password-row-1");
let passwordEl2 = document.getElementById("password-row-2");

generateButton.addEventListener("click", function(){
    passwordEl1.textContent = generatePassword();
    passwordEl2.textContent = generatePassword();
})

function generatePassword(){
    let password = "";
    for(let i = 0; i < 10; i++){
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}

function copyToClipboard(e) {
    let password = e.target;
    navigator.clipboard.writeText(password.textContent).then(res=>{
            console.log("Input data copied to clipboard successfully");
        })
    
  /* Alert the copied text */
}

passwordEl1.addEventListener("click", copyToClipboard);
passwordEl2.addEventListener("click", copyToClipboard);


  