
window.sr = ScrollReveal({ reset: true});

    

let marcador = document.querySelector('#indicador');
let navegacao = document.querySelector('nav');
let a = document.querySelectorAll('nav a');



navegacao.onclick= ()=>{
    marcador.classList.toggle('habilitado');

}

function indicador (E){
    marcador.style.left =E.offsetLeft + 'px';
    marcador.style.width = E.offsetWidth + 'px';
    marcador.style.display = "block";
    marcador.style.filter =  'hue-rotate('+Math.random()*360+'deg)'
}

a.forEach(link =>{
    link.addEventListener("click",(E)=>{
        indicador(E.target);
    })
})

function AdicionarClasse(){
    a.forEach((i) =>
    i.classList.remove('ativo'));
    this.classList.add('ativo');
}

a.forEach((i) =>
i.addEventListener('click', AdicionarClasse))


sr.reveal('.imagem', {duration:1500});
sr.reveal('.apresentacao' ,{duration:1500});
sr.reveal('#biografia', {duration:1500});
sr.reveal('.biografia' ,{duration:1500});
sr.reveal('#carreira', {duration:1500});
sr.reveal('.carreira' ,{duration:1500});
sr.reveal('#obras', {duration:1500});
sr.reveal('.obras' ,{duration:1500});
sr.reveal('#frases', {duration:1500});
sr.reveal('.frases' ,{duration:1500});



window.addEventListener('scroll',function(){
let header  = document.querySelector('#header');
header.classList.toggle('rolagem', window.scrollY > 0 )
})