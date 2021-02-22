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
    ///close button
    const closeButton=document.createElement('button')
    closeButton.innerHTML="\u00D7"
    li.append(closeButton)
    closeButton.className='closeButton'
    closeButton.setAttribute('onclick','removeElement(this)')
 }else{
     alert('please write something')
 }
 input.value=""
}
function liClick(element){
   if(!element.innerHTML.includes('✅')){
  element.prepend(document.createTextNode('✅'))
   }
   else{
    element.innerHTML=element.innerHTML.slice(1)
}
  element.classList.toggle('liClick')
}
//// to delete parent element of cloase button
function removeElement(element){
    element.parentElement.classList.toggle('hidden')
}