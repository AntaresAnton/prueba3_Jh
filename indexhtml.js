const grid = document.querySelector('.grid');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
let currentPage = 1;
// llamada de la api
function renderCharacters(page, nombre) 
//{
  //let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  let url = `http://localhost:4000/personajes`;
  // if (nombre) {
  //   url += `&nombre=${nombre}`;
  // }
  let i=1;

  let row = '';
  for(let x=1;x<=data.lenght;x++){
    if (x==1) {
      row = row + `<div class="card-group" id="conjuntoTarjetas">`;
    }
    row = row + `        
      <div class="card" id="tarjeta">
        <img src="${character.image}" class="card-img-top" alt="...">
        <div class="card-body">
                <h5 class="card-title">${character.nombre}</h5>
                <p class="card-text">Edad : ${character.edad} </p>
                <p class="card-text">Género : ${character.genero} </p>
                <p class="card-text">Compañero : ${character.companero} </p>
                <p class="card-text">Descripción : ${character.descripcion} </p>
            </div>
    </div>            
    `;
    if (x%5==0) {
      row = row + `</div><div class="card-group">`;
      
    }
    i = i+1;
    

      grid.innerHTML = row;
  }


//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       data.results.forEach(character => {
//         if (i==1) {
//           row = row + `<div class="card-group" id="conjuntoTarjetas">`;
//         }
//         row = row + `        
//           <div class="card" id="tarjeta">
//             <img src="${character.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//                     <h5 class="card-title">${character.nombre}</h5>
//                     <p class="card-text">Edad : ${character.edad} </p>
//                     <p class="card-text">Género : ${character.genero} </p>
//                     <p class="card-text">Compañero : ${character.companero} </p>
//                     <p class="card-text">Descripción : ${character.descripcion} </p>
//                 </div>
//         </div>            
//         `;
//         if (i%5==0) {
//           row = row + `</div><div class="card-group">`;
          
//         }
//         i = i+1;
        
//       });

//     grid.innerHTML = row;
//      })
//     // .catch(error => console.error(error));
// }

searchButton.addEventListener('click', () => {
  const nombre = searchInput.value.trim();
  if (nombre) {
    renderCharacters(1, nombre);
    currentPage = 1;
  }
});

renderCharacters(currentPage);

// Botonera para paginar
prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderCharacters(currentPage, searchInput.value.trim());
  }
});

nextButton.addEventListener('click', () => {
  currentPage++;
  renderCharacters(currentPage, searchInput.value.trim());
});