// clonlash haqida

let x=5;
let y=x;

y=y+4;

console.log(x,y);

  const number = {
            x:1,
            y:2,
            z:{
                a:4,
                b:3,
            },
        }

const newNumber= Object.assign({},number);

newNumber.y=8;
console.log(newNumber);
console.log(number);

const arr=[2,3,4,5,6];
const newArr= arr.slice();
newArr[2]=15;
console.log(newArr);
console.log(arr);

// Spread bu ... 3 ta nuqta bilan arraylarni bir biriga qo'shish uchun ishlatiladi
const num=[2,3,4,5,6];
const car=["lada", "lexus","chevrolet","bmw","mercedes"];

const AllArr = [...car, ...num];
console.log(AllArr);
function objnusxa(obj){
    let nusxaobj={};
    for(let key in obj){
        nusxaobj[key]=obj[key];
    }
    return nusxaobj
}

const newnusxa = objnusxa(number);
newnusxa.x=11;
console.log(newnusxa);

