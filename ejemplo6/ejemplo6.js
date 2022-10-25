function abrirRegalo(event){

  const newHeader = document.createElement('h1');
  newHeader.textContent = 'Felicidades!!';

  const newImage = document.createElement('img');
  newImage.src = '../regaloImg/giphy.gif';

  const container = document.querySelector('#container');
  container.innerHTML = '';
  container.appendChild(newHeader);
  container.appendChild(newImage);
}

const imagen = document.querySelector('img');
imagen.addEventListener('click', abrirRegalo);
