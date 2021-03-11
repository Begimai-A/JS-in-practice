const light=document.querySelector('#lightbulb');

light.addEventListener('click', ()=>{
    light.classList.toggle('bulb-on');
});