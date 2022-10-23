function abrirRegalo(event){
  const image = event.currentTarget;
  image.src = 'jack-smith-map.png'; ///////////////////////////////
  image.removeEventListener('click', abrirRegalo);
}

const imagen = document.querySelector('img');
imagen.addEventListener('click', abrirRegalo);
