import POTTER from './data/potter/potter.js';
import { dataPotter, ordenadorAZ } from './data.js';

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
  for (let i = 0; i < potter.length; i++) {
    const llamar = `
    <div name='potter' class='cont-potter' id='${potter[i].id}'>
        <image class= 'image-prop' src ='${potter[i].image}'/>
        <p class ='nombre-potter'>${potter[i].name}</p>
        <p class = 'spec-potter'>${potter[i].species}</p>   
    </div>`;
    muestra += llamar;
  }
  return muestra;
};
contenedorPotter.innerHTML = mostrarData(allPotter);

const ordenar = document.getElementById('ordenar');
ordenar.addEventListener('change', () => {
  const ordenador = ordenar.value;
  let ordenadorPotter = [];
  if (ordenador === 'ordenar-az') {
    ordenadorPotter = ordenadorAZ(allPotter, ordenador);
  } else if (ordenador === 'ordenar-za') {
    ordenadorPotter = ordenadorAZ(allPotter, ordenador);
  } else {
    contenedorPotter.innerHTML = mostrarData(allPotter);
  }
  contenedorPotter.innerHTML = mostrarData(ordenadorPotter);
});