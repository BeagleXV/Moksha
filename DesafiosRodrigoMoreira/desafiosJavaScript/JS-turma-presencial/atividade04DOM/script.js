const titulo = document.getElementById('titulo');
titulo.textContent = "Novo Titulo";
const paragrafos = document.querySelectorAll('#paragrafos > p');
paragrafos.forEach(function(paragrafo){
    paragrafo.textContent = 'Texto modificado'
});
const button = document.getElementById('button');
button.addEventListener('click',function(){
    alert('Botão clicado!')
});