const dataNueva = [];
export const dataPotter = (data) => {
  data.forEach((element) => {
    dataNueva.push({
      name: element.name,
      species: element.species,
      gender: element.gender,
      house: element.house,
      yearOfBirth: element.yearOfBirth ? element.yearOfBirth : 'Sin Año',
      wand: element.wand,
      patronus: element.patronus,
      hogwartsStaff: element.hogwartsStaff,
      hogwartsStudent: element.hogwartsStudent,
      actor: element.actor,
      image: element.image,
    });
  });
  return dataNueva;
};


export const ordenadorAZ = (data) => {
  const arrayNombre = data.slice().sort((aa, bb) => (aa.name > bb.name ? 1 : -1));
  return arrayNombre;
};

export const ordenadorAnioAsc = (data) => {
  const arraAnio = data.slice().sort((aa, bb) => (bb.yearOfBirth - aa.yearOfBirth));
  return arraAnio;
};

export const ordenadorAnioDesc = (data) => {
  const arraAnio = data.slice().sort((aa, bb) => (aa.yearOfBirth - bb.yearOfBirth));
  return arraAnio;
};

export const filtrarCasa = (data, casa) => {
  const filtradorCasa = data.filter((element) => (element.house === casa));
  return filtradorCasa;
};

export const filtrarGenero = (data, genero) => {
  const filtradorGenero = data.filter((element) => (element.gender === genero));
  return filtradorGenero;
};

export const filtrarRol = (data, rol) => {
  const isStaff = rol === 'staff';
  const isStudent = rol === 'student';
  const filtradorRol = data.filter((element) => (
    element.hogwartsStaff === isStaff && element.hogwartsStudent === isStudent));
  return filtradorRol;
};

export const filtrarVaritas = (data, varitas) => {
  const filtradorVaritas = data.filter((element) => (element.wand.core === varitas));
  return filtradorVaritas;
};
