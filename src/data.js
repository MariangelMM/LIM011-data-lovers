export const dataPotter = (data) => {
  const dataNueva = [];
  for (let i = 0; i < data.length; i += 1) {
    dataNueva.push({
      image: data[i].image,
      species: data[i].species,
      name: data[i].name,
    });
  }
  return dataNueva;
};

export const ordenadorAZ = (data) => {
  const arrayNombre = data.slice().sort((aa, bb) => (aa.name > bb.name ? 1 : -1));
  return arrayNombre;
};
