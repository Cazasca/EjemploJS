function abrirRegalo(){
  const image = document.querySelector('img');
  image.src = '../regaloImg/giphy.gif'; ///////////////////////////////
  image.removeEventListener('click', abrirRegalo);
}

const imagen = document.querySelector('img');
imagen.addEventListener('click', abrirRegalo);
