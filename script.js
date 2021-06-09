const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
m1.addEventListener('click', ()  => {
    m1.style.display = "none"
    m2.style.display = "block"
})
m2.addEventListener('click', ()  => {
    m1.style.display = "block"
    m2.style.display = "none"
   
})
