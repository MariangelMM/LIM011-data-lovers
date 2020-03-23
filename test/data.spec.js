import {
  dataPotter, ordenadorAZ, ordenadorAnioAsc, ordenadorAnioDesc,
  filtrarCasa, filtrarGenero, filtrarRol, filtrarVaritas,
} from '../src/data';

const potterPrueba = [
  {
    name: 'Harry Potter',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    yearOfBirth: 1980,
    wand: {
      wood: 'holly',
      core: 'phoenix feather',
      length: 11,
    },
    patronus: 'stag',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Daniel Radcliffe',
    image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  },
  {
    name: 'Hermione Granger',
    species: 'human',
    gender: 'female',
    house: 'Gryffindor',
    yearOfBirth: 1979,
    wand: {
      wood: 'vine',
      core: 'dragon heartstring',
      length: '',
    },
    patronus: 'otter',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Emma Watson',
    image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
  },
  {
    name: 'Argus Filch',
    species: 'human',
    gender: 'male',
    house: '',
    yearOfBirth: 1930,
    wand: {
      wood: '',
      core: '',
      length: '',
    },
    patronus: '',
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: 'David Bradley',
    image: 'http://hp-api.herokuapp.com/images/filch.jpg',
  },
  {
    name: 'Vincent Crabbe',
    species: 'human',
    gender: 'male',
    house: 'Slytherin',
    yearOfBirth: 1978,
    wand: {
      wood: '',
      core: '',
      length: '',
    },
    patronus: '',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Jamie Waylett',
    image: 'http://hp-api.herokuapp.com/images/crabbe.jpg',
  },
];

const dataNueva = potterPrueba;


describe('dataPotter', () => {
  it('debería ser una función', () => {
    expect(typeof dataPotter).toBe('function');
  });
  it('debería mostrar data personajes', () => {
    expect(dataPotter(potterPrueba)).toEqual(dataNueva);
  });
});

describe('ordenadorAZ', () => {
  it('debería ser una función', () => {
    expect(typeof ordenadorAZ).toBe('function');
  });
  it('debería ordenar alfabéticamente de A-Z', () => {
    expect(ordenadorAZ(potterPrueba, 'ordenar-az')[0].name).toEqual('Argus Filch');
  });
  it('debería ordenar alfabéticamente de Z-A', () => {
    expect(ordenadorAZ(potterPrueba, 'ordenar-za')[0].name.reverse).toEqual();
  });
});


describe('ordenadorAnioAsc', () => {
  it('debería ser una función', () => {
    expect(typeof ordenadorAnioAsc).toBe('function');
  });
  it('debería ordenar ascendentemente de menor a mayor', () => {
    expect(ordenadorAnioAsc(potterPrueba, 'ordenar-asc')[0].yearOfBirth).toEqual(1980);
  });
});

describe('ordenadorAnioDesc', () => {
  it('debería ser una función', () => {
    expect(typeof ordenadorAnioDesc).toBe('function');
  });
  it('debería ordenar decendentemente de mayor a menor', () => {
    expect(ordenadorAnioDesc(potterPrueba, 'ordenar-desc')[0].yearOfBirth).toEqual(1930);
  });
});


describe('filtrarCasa', () => {
  it('debería ser una función', () => {
    expect(typeof filtrarCasa).toBe('function');
  });
  it('debería filtrar por casa', () => {
    expect(filtrarCasa(potterPrueba, 'Slytherin')[0].house).toEqual('Slytherin');
  });
});

describe('filtrarGenero', () => {
  it('debería ser una función', () => {
    expect(typeof filtrarGenero).toBe('function');
  });
  it('debería filtrar por genero', () => {
    expect(filtrarGenero(potterPrueba, 'female')[0].gender).toEqual('female');
  });
});

describe('filtrarVaritas', () => {
  it('debería ser una función', () => {
    expect(typeof filtrarVaritas).toBe('function');
  });
  it('debería filtrar por varitas', () => {
    expect(filtrarVaritas(potterPrueba, 'phoenix feather')[0].wand.core).toEqual('phoenix feather');
  });
});

describe('filtrarRol', () => {
  it('debería ser una función', () => {
    expect(typeof filtrarRol).toBe('function');
  });
  it('debería filtrar por rol', () => {
    expect(filtrarRol(potterPrueba, 'staff')[0].hogwartsStaff).toEqual(true);
  });
});
