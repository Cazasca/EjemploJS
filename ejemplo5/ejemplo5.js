function abrirRegalo(event){
  const image = event.currentTarget;
  image.src = '../regaloImg/giphy.gif'; ///////////////////////////////

  const mensaje = document.querySelector('h1');
  mensaje.textContent = 'Felicidades!!';

  image.removeEventListener('click', abrirRegalo);
}

const imagen = document.querySelector('img');
imagen.addEventListener('click', abrirRegalo);
