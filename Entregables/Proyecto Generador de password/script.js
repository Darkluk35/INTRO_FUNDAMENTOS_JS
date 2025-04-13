let base = "";
let baseMin = "abcdefghijklmnñopqrstuvwxyz";
let baseMay = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var baseNum = "0123456789";
var baseSym = "!#$%&/()=?¡*+~^{}[]-_.:,;<>|@";

function generator(){
    let contentRange = document.getElementById("rangePass").value;

    if (minusPass.checked) base += baseMin;
    if (mayusPass.checked) base += baseMay;
    if (numberPass.checked) base += baseNum;
    if (symbolPass.checked) base += baseSym;

    passNew.innerText = generatePassword(base, contentRange);
}
//····························································································//
const generatePassword = (base, contentRange) => {
    let password = "";
    for (let x = 0; x < contentRange; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
};

let startGenerated = document.getElementById("btnGenerator");

startGenerated.addEventListener("click",generator);
