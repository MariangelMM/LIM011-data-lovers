export const dataPotter = (data) => {
  const dataNueva = [];
  for (let i = 0; i < data.length; i += 1) {
    dataNueva.push({
      image: data[i].image,
      species: data[i].species,
      name: data[i].name,
      house: data[i].house,
      gender: data[i].gender,
      patronus: data[i].patronus,
      actor: data[i].actor,
    });
  }
  return dataNueva;
};

export const ordenadorAZ = (data) => {
  const arrayNombre = data.slice().sort((aa, bb) => (aa.name > bb.name ? 1 : -1));
  return arrayNombre;
};

export const ordenadorAño = (data) => {
  const arrayAño = data.slice().sort((aa, bb) => (aa.yearOfBirth > bb.yearOfBirth ? 1 : -1));
  return arrayAño;
};


export const flitrarCasa = (data, casa) => {
  const flitradorCasa = data.filter((element) => (element.house.indexOf(casa) > -1));
  return flitradorCasa;
};

export const flitrarGenero = (data, genero) => {
  const flitradorGenero = data.filter((element) => (element.gender.indexOf(genero) > -1));
  return flitradorGenero;
};
