export const dataPotter = (data) => {
  const dataNueva = [];
  for (let i = 0; i < data.length; i++) {
    dataNueva.push({
      image: data[i].image,
      species: data[i].species,
      name: data[i].name,
    });
  }
  return dataNueva;
};

export const ordenadorAZ = (data, ordenNombre) => {
  const arrayNombre = data.slice().sort((aa, bb) => {
    if (aa.name > bb.name) {
      return 1;
    }
    if (aa.name < bb.name) {
      return -1;
    }
  });
  if (ordenNombre === 'ordenar-az') {
    return arrayNombre;
  }
  if (ordenNombre === 'ordenar-za') {
    return arrayNombre.reverse();
  }
  return ordenadorAZ;
};
