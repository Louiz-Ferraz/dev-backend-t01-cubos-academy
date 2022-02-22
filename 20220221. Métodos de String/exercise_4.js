//upper case each first letter of string

const fullName = "luiz felipe ferraz";

let arrayOfName = fullName.split(" ");
let newStringOfName = "";

for (let item of arrayOfName) {
    newStringOfName += item[0].toUpperCase() + item.slice(1) + " ";
}

console.log(`_${newStringOfName.trim()}_`);