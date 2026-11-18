// dom - document object model
// dokumentning object korinishidagi modeli


let text = document.getElementById("text")
let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")

console.log(text);

btn.addEventListener('click',()=>{
    text.textContent = "bye bye"
    text.style.color = 'red'
    console.log('btn clicked');
    
})

btn2.addEventListener('click', ()=>{
    text.textContent = 'hello'
    text.style.color = "purple"
    console.log('btn clicked');
    
})
