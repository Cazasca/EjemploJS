function abrirRegalo(event){
  const image = event.currentTarget;
  image.src = '../regaloImg/giphy.gif'; ///////////////////////////////
  image.removeEventListener('click', abrirRegalo);
}

const imagen = document.querySelector('img');
imagen.addEventListener('click', abrirRegalo);
