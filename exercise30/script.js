
function operoter(a,b ,Callback){
    return Callback(a,b);
}
function add(a,b){
    return(a+b);
}
function substrect(a,b){
    return(a-b);
}
function multiply(a,b){
    return(a*b);

}
function divide(a,b){
    return (a/b);
}
console.log("addition ",operoter(2,3,add));
console.log("multiply",operoter(2,4,multiply))
console.log("sub",operoter(4,2,substrect))
console.log("divide",operoter(20,2 ,divide))