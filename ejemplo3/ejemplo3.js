function abrirRegalo(){
  const image = document.querySelector('img');
  image.src = 'profile-96x96.jpg'; ///////////////////////////////
  image.removeEventListener('click', abrirRegalo);
}

const imagen = document.querySelector('img');
imagen.addEventListener('click', abrirRegalo);
