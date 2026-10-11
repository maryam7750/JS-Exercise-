

 let arry=[1,2,3]
let allnumberss=[...arry,4,5,6]
console.log(allnumberss)



           //// exercise2
           
function multiply(...numbers) {
    return numbers.reduce((total, number) => total * number, 1);
}

console.log(multiply(2, 2, 4));   
console.log(multiply(2, 2));   
