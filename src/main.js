import POTTER from './data/potter/potter.js';
import {
  dataPotter, ordenadorAZ, ordenadorAnioAsc, ordenadorAnioDesc,
  filtrarCasa, filtrarGenero, filtrarRol, filtrarVaritas,
} from './data.js';

// Declarando variable para evento
const btnEntrar = document.getElementById('entrar');
const btnEmpezar = document.getElementById('empezar');
// Declarando variable para mostrar y ocultar vista
const primeraVista = document.getElementById('primera_vista');
const segundaVista = document.getElementById('segunda_vista');
const terceraVista = document.getElementById('tercera_vista');
// Dando funcionalidad al botón entrar
btnEntrar.addEventListener('click', () => {
  const nombre = document.getElementById('name');
  document.getElementById('mensaje_bienvenido').innerHTML = ` Hola ${nombre.value} bienvenido al mundo de Harry Potter aqui encontraras una lista con los personajes de la saga y podras acceder a sus caracteristicas para que puedas conocerlos aun mas.`;
  segundaVista.classList.remove('ocultar');
  primeraVista.classList.add('ocultar');
});
// Dando funcionalidad al botón empezar
btnEmpezar.addEventListener('click', () => {
  terceraVista.classList.remove('ocultar');
  segundaVista.classList.add('ocultar');
});

const allPotter = dataPotter(POTTER);
const contenedorPotter = document.getElementById('contenedor_potter');

export const mostrarData = (data) => { // parámetro
  let muestra = '';
  data.forEach((element) => {
    const template = `
    <div class="flip_card">
          <div class="flip_card_inner">
            <div class="flip_card_front">
              <img class="img_potter" src= "${element.image}"/>
              <h2> ${element.name}</h2>
              <h2> ${element.house}</h2>
            </div>
  
            <div class="flip_card_back">
                <h2>${element.name}</h2>
                <h4 class="caracteristicas">Casa: ${element.house}</h4>
                <h4 class="caracteristicas">Genero: ${element.gender}</h4>
                <h4 class="caracteristicas">Año: ${element.yearOfBirth}</h4>
                <h4 class="caracteristicas">Patronus: ${element.patronus}</h4>
                <h4 class="caracteristicas">Especie: ${element.species}</h4>
                <h4 class="caracteristicas">Actor: ${element.actor}</h4>
                <img class="escudo" src="./imagenes/hogwarts.png" />        
              </div>
            </div>
          </div>
        </div>
      `;
    muestra += template;
  });
  return muestra;
};
contenedorPotter.innerHTML = mostrarData(allPotter);


export const ordenar = document.getElementById('ordenar');
ordenar.addEventListener('change', () => {
  const ordenador = ordenar.value;
  let ordenadorPotter = [];
  if (ordenador === 'ordenar-az') {
    ordenadorPotter = ordenadorAZ(allPotter, ordenador);
    contenedorPotter.innerHTML = mostrarData(ordenadorPotter);
  } else if (ordenador === 'ordenar-za') {
    ordenadorPotter = ordenadorAZ(allPotter, ordenador).reverse();
    contenedorPotter.innerHTML = mostrarData(ordenadorPotter);
  } else if (ordenador === 'all') {
    contenedorPotter.innerHTML = mostrarData(allPotter);
  }
});

export const ordenarAnio = document.getElementById('ordenaranio');
ordenarAnio.addEventListener('change', () => {
  const ordenadorAsc = ordenarAnio.value;
  const ordenadorDesc = ordenarAnio.value;
  let ordenadorPotterAnio = [];
  if (ordenadorAsc === 'ordenar-asc') {
    ordenadorPotterAnio = ordenadorAnioAsc(allPotter, ordenadorAsc);
    contenedorPotter.innerHTML = mostrarData(ordenadorPotterAnio);
  } else if (ordenadorDesc === 'ordenar-desc') {
    ordenadorPotterAnio = ordenadorAnioDesc(allPotter, ordenadorDesc);
    contenedorPotter.innerHTML = mostrarData(ordenadorPotterAnio);
  } else if (ordenadorAsc === 'all') {
    contenedorPotter.innerHTML = mostrarData(allPotter);
  }
});


export const casa = document.getElementById('casa');
casa.addEventListener('change', () => {
  if (casa.value === 'all') {
    contenedorPotter.innerHTML = mostrarData(allPotter);
  } else {
    const filtrandoCasa = filtrarCasa(allPotter, casa.value);
    contenedorPotter.innerHTML = mostrarData(filtrandoCasa);
  }
});

export const genero = document.getElementById('genero');
genero.addEventListener('change', () => {
  if (genero.value === 'all') {
    contenedorPotter.innerHTML = mostrarData(allPotter);
  } else {
    const filtrandoGenero = filtrarGenero(allPotter, genero.value);
    contenedorPotter.innerHTML = mostrarData(filtrandoGenero);
  }
});

export const rol = document.getElementById('rol');
rol.addEventListener('change', () => {
  if (rol.value === 'all') {
    contenedorPotter.innerHTML = mostrarData(allPotter);
  } else {
    const filtrandoRol = filtrarRol(allPotter, rol.value);
    contenedorPotter.innerHTML = mostrarData(filtrandoRol);
  }
});

export const varitas = document.getElementById('varitas');
varitas.addEventListener('change', () => {
  if (varitas.value === 'all') {
    contenedorPotter.innerHTML = mostrarData(allPotter);
  } else {
    const filtrandoVaritas = filtrarVaritas(allPotter, varitas.value);
    contenedorPotter.innerHTML = mostrarData(filtrandoVaritas);
  }
});
