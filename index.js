let nameArray = ['bola','tito','kike']
// nameArray.push('kola')
nameArray.unshift(7)
delete nameArray[1]

console.log(nameArray);
console.log(nameArray[1]);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

let plus = myGirls.concat(myBoys)
console.log(plus);