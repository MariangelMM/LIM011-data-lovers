/* eslint-disable no-restricted-globals */
import POTTER from './data/potter/potter.js';
import {
  dataPotter, ordenadorAZ, ordenadorAño, flitrarCasa, flitrarGenero,
} from './data.js';

// Declarando variable para evento
const entrar = document.getElementById('entrar');
const empezar = document.getElementById('empezar');
// Declarando variable para mostrar y ocultar vista
const primeraVista = document.getElementById('primera_vista');
const segundaVista = document.getElementById('segunda_vista');
const terceraVista = document.getElementById('tercera_vista');
// Dando funcionalidad al botón entrar
entrar.addEventListener('click', () => {
  const nombre = document.getElementById('name');
  document.getElementById('mensaje_bienvenido').innerHTML = ` Hola ${nombre.value} bienvenido al mundo de Harry Potter aqui encontraras una lista con los personajes de la saga y podras acceder a sus caracteristicas para que puedas conocerlos aun mas.`;
  segundaVista.classList.remove('ocultar');
  primeraVista.classList.add('ocultar');
});
// Dando funcionalidad al botón empezar
empezar.addEventListener('click', () => {
  terceraVista.classList.remove('ocultar');
  segundaVista.classList.add('ocultar');
});

const allPotter = dataPotter(POTTER);
const contenedorPotter = document.getElementById('contenedor-potter');

export const mostrarData = (potter) => { // parámetro
  let muestra = ' ';
  for (let i = 0; i < potter.length; i += 1) {
    const llamar = `
    <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img class="img-poke" src= "${potter[i].image}"/>
              <h2 class="numeroPoke"> ${potter[i].name}</h2>
              <h2 class="nombre">${potter[i].house}</h2>
            </div>
  
            <div class="flip-card-back">
                <h2 class="nombre-back">${potter[i].name}</h2>
                <h4 class="caracteristicas">Casa: ${potter[i].house}</h4>
                <h4 class="caracteristicas">Genero: ${potter[i].gender}</h4>
                <h4 class="caracteristicas">Patronus: ${potter[i].patronus}</h4>
                <h4 class="caracteristicas">Especie: ${potter[i].species}</h4>
                <h4 class="caracteristicas">Actor: ${potter[i].actor}</h4>

                           
              </div>
            </div>
          </div>
        </div>
      `;
    muestra += llamar;
  }
  return muestra;
};
contenedorPotter.innerHTML = mostrarData(allPotter);

export const ordenar = document.getElementById('ordenar');
ordenar.addEventListener('change', () => {
  const ordenador = ordenar.value;
  let ordenadorPotter = [];
  if (ordenador === 'ordenar-az') {
    ordenadorPotter = ordenadorAZ(allPotter, ordenador);
  } else if (ordenador === 'ordenar-za') {
    ordenadorPotter = ordenadorAZ(allPotter, ordenador).reverse();
  } else {
    contenedorPotter.innerHTML = mostrarData(allPotter);
  }
  contenedorPotter.innerHTML = mostrarData(ordenadorPotter);
});

export const ordenarAño = document.getElementById('ordenaraño');
ordenarAño.addEventListener('change', () => {
  const ordenadorAsc = ordenarAño.value;
  let ordenadorPotterAño = [];
  if (ordenadorAsc === 'ordenar-asc') {
    ordenadorPotterAño = ordenadorAño(allPotter, ordenadorAsc);
  } else if (ordenadorAsc === 'ordenar-desc') {
    ordenadorPotterAño = ordenadorAño(allPotter, ordenadorAsc).reverse();
  } else {
    contenedorPotter.innerHTML = mostrarData(allPotter);
  }
  contenedorPotter.innerHTML = mostrarData(ordenadorPotterAño);
});


export const casa = document.getElementById('casa');
casa.addEventListener('change', () => {
  const flitrandoCasa = flitrarCasa(allPotter, casa.value);
  contenedorPotter.innerHTML = mostrarData(flitrandoCasa);
});

export const genero = document.getElementById('genero');
genero.addEventListener('change', () => {
  const flitrandoGenero = flitrarGenero(allPotter, genero.value);
  contenedorPotter.innerHTML = mostrarData(flitrandoGenero);
});
