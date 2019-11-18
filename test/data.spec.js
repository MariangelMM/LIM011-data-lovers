/* eslint-disable import/no-duplicates */
import { dataPotter, ordenadorAZ, ordenadorAnio } from '../src/data';


const potterPrueba = [{
  name: 'Harry Potter',
  species: 'human',
  gender: 'male',
  house: 'Gryffindor',
  dateOfBirth: '31-07-1980',
  yearOfBirth: 1980,
  ancestry: 'half-blood',
  eyeColour: 'green',
  hairColour: 'black',
  wand: {
    wood: 'holly',
    core: 'phoenix feather',
    length: 11,
  },
  patronus: 'stag',
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: 'Daniel Radcliffe',
  alive: true,
  image: 'http://hp-api.herokuapp.com/images/harry.jpg',
},
{
  name: 'Hermione Granger',
  species: 'human',
  gender: 'female',
  house: 'Gryffindor',
  dateOfBirth: '19-09-1979',
  yearOfBirth: 1979,
  ancestry: 'muggleborn',
  eyeColour: 'brown',
  hairColour: 'brown',
  wand: {
    wood: 'vine',
    core: 'dragon heartstring',
    length: '',
  },
  patronus: 'otter',
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: 'Emma Watson',
  alive: true,
  image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
},
{
  name: 'Argus Filch',
  species: 'human',
  gender: 'male',
  house: '',
  dateOfBirth: '',
  yearOfBirth: '',
  ancestry: 'squib',
  eyeColour: '',
  hairColour: 'grey',
  wand: {
    wood: '',
    core: '',
    length: '',
  },
  patronus: '',
  hogwartsStudent: false,
  hogwartsStaff: true,
  actor: 'David Bradley',
  alive: true,
  image: 'http://hp-api.herokuapp.com/images/filch.jpg',
},
{
  name: 'Vincent Crabbe',
  species: 'human',
  gender: 'male',
  house: 'Slytherin',
  dateOfBirth: '',
  yearOfBirth: '',
  ancestry: 'pure-blood',
  eyeColour: 'black',
  hairColour: 'black',
  wand: {
    wood: '',
    core: '',
    length: '',
  },
  patronus: '',
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: 'Jamie Waylett',
  alive: false,
  image: 'http://hp-api.herokuapp.com/images/crabbe.jpg',
},
{
  name: 'Ginny Weasley',
  species: 'human',
  gender: 'female',
  house: 'Gryffindor',
  dateOfBirth: '11-08-1981',
  yearOfBirth: 1981,
  ancestry: 'pure-blood',
  eyeColour: 'brown',
  hairColour: 'red',
  wand: {
    wood: 'yew',
    core: '',
    length: '',
  },
  patronus: 'horse',
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: 'Bonnie Wright',
  alive: true,
  image: 'http://hp-api.herokuapp.com/images/ginny.jpg',
},
{
  name: 'Cho Chang',
  species: 'human',
  gender: 'female',
  house: 'Ravenclaw',
  dateOfBirth: '',
  yearOfBirth: '',
  ancestry: '',
  eyeColour: 'brown',
  hairColour: 'black',
  wand: {
    wood: '',
    core: '',
    length: '',
  },
  patronus: 'swan',
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: 'Katie Leung',
  alive: true,
  image: 'http://hp-api.herokuapp.com/images/cho.jpg',
},
];

describe(dataPotter, () => {
  it('debería ser una función', () => {
    expect(typeof dataPotter).toBe('function');
  });
  it('deberia mostrar todos los personajes', () => {
    expect(typeof dataPotter).toEqual('function');
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
    expect(ordenadorAZ(potterPrueba, 'ordenar-za')[0].name.reverse).toEqual('');
  });
});

describe('ordenadorAnio', () => {
  it('debería ser una función', () => {
    expect(typeof ordenadorAnio).toBe('function');
  });
  it('debería ordenar de manera ascendente', () => {
    expect(ordenadorAnio(potterPrueba, 'ordenar-asc')[0].yearOfBirth).toEqual(1981);
  });
  it('debería ordenar de manera descendente', () => {
    expect(ordenadorAnio(potterPrueba, 'ordenar-desc')[0].yearOfBirth.reverse).toEqual();
  });
});
