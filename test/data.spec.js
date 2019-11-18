/* eslint-disable import/no-duplicates */
import { ordenadorAZ } from '../src/data';


const potterPrueba = [
  {
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
    yearOfBirth: 1930,
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
    yearOfBirth: 1978,
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
];


describe('ordenadorAZ', () => {
  it('debería ser una función', () => {
    expect(typeof ordenadorAZ).toBe('function');
  });
  it('debería ordenar alfabéticamente de A-Z', () => {
    expect(ordenadorAZ(potterPrueba, 'ordenar-az')[0].name).toEqual('Argus Filch');
  });
});
