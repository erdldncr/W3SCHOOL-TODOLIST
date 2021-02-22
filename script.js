/// add item adinda bir function ekledim
document.querySelector("button").setAttribute('onclick','addItem()')
////unordered list ekledim
const ul=document.createElement('ul')
//unordered listi divden sonraya ekledim
document.querySelector('div').after(ul)
///Inputu variable'a atadim
const input= document.querySelector('input')
//Listi olsutup havada ututuom

function addItem(){
 if(input.value){
    const li=document.createElement('li')
    li.innerHTML=input.value
    li.setAttribute('onclick','liClick(this)')
    ul.appendChild(li)
 }else{
     alert('please write something')
 }
}
function liClick(element){
  element.innerHTML= `<strike> ${element.innerHTML}</strike>`  
  element.prepend(document.createTextNode('✅'))
element.style.color="#FFF"
element.style.backgroundColor='rgb(101,136,128)'
}
