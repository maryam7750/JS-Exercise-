

function addItem(){
    //create new item
 const newitem=document.createElement('li')

//change the contect
newitem.textContent='new item';
// list hore ujiro ku dabaqabo
list.appendChild(newitem)


}
function removeItem(){
    if(list.lastChild){
    list.removeChild(list.lastChild);
    }
    else{
        alert("xadki ugu badna waad gaarte!")
    }
}