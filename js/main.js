const subtitle = document.querySelector('h1');

const user = {
  name: 'Name',
  age: 33,
  email: 'name@email.com ',
  favFilms: ['Poseidon', 'Spencer', 'Ice Age 3', 'Spider Man'],
};

const usernameEl = document.getElementById('username');
const ageEl = document.getElementById('age');
const emailEl = document.getElementById('email');
const favFilmsEl = document.getElementById('fav-films');

function createUser(user) {
  usernameEl.textContent = user.name;
  ageEl.innerHTML = user.age;
  emailEl.textContent = user.email;

  user.favFilms.forEach((film) => {
    const li = document.createElement('li');
    li.textContent = film;
    favFilmsEl.appendChild(li);
  });
}

createUser(user);

const inputName = document.getElementById('username-input');

// inputName.addEventListener('input', (ev) => {
//   usernameEl.textContent = ev.target.value;
// });

// const updateButton = document.getElementById('button-update');
// updateButton.addEventListener('click', () => {
//   usernameEl.textContent = inputName.value;
// });

///////////////////////////////////////////////

const USERS = [
  {
    id: 1,
    user_name: 'Zabdiel Diaz',
    description: 'Me gustan los conejos',
    age: '25',
    fav_music: {
      bands: ['Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'],
    },
  },
  {
    id: 2,
    user_name: 'Fernando Aguilar',
    description: 'Me gusta el calor',
    age: '22',
    fav_music: {
      bands: [
        'Los Temerarios',
        'Grupo Frontera',
        'Conjunto Primavera',
        'Tigres del Norte',
      ],
    },
  },
];

function createElementWithText(text, type) {
  const el = document.createElement(type);
  el.textContent = text;
  return el;
}

function createList(items) {
  const ul = document.createElement('ul');

  items.forEach((item) => {
    ul.appendChild(createElementWithText(item, 'li'));
  });

  return ul;
}

function createUserCard(user) {
  const newProfile = document.createElement('div');
  newProfile.classList.add('profile', 'container');

  newProfile.appendChild(createElementWithText(user.user_name, 'h2'));
  newProfile.appendChild(createElementWithText(user.age, 'h3'));
  newProfile.appendChild(createElementWithText(user.description, 'p'));
  if(user.fav_music && user.fav_music.bands)
    newProfile.appendChild(createList(user.fav_music.bands));

  return newProfile;
}

function insertUserCardsDom() {
  const profCont = document.getElementById('profiles');
  USERS.forEach((user) => {
    profCont.appendChild(createUserCard(user));
  });
}

insertUserCardsDom();

//Ejercicio agragar banddas
//Obtener la infor del usuario desde inputs y mostrar en tarjetas
//Al menos dos commits


/**
 * AGREGAR NUEVAS TARJETAS DEL INPUT
 */

const addCardButton = document.getElementById('add-card-button');
const usernameInput = document.getElementById('username-input');
const ageInput =  document.getElementById('age-input');
const descInput = document.getElementById('desc-input');
const newProfiles = document.getElementById('new-profiles');

const CARDS_MEM = [];

function pushCardInContainer(container, card) {
  container.appendChild(card);
}


addCardButton.addEventListener('click', () => {

  if(usernameInput.value && 
    ageInput.value && 
    descInput.value){
    const user = {
      id: CARDS_MEM.length + 1,
      user_name: usernameInput.value,
      description: descInput.value,
      age: ageInput.value,
    }

    CARDS_MEM.push(user);

    const cardEl = createUserCard(user);
    pushCardInContainer(newProfiles, cardEl);

  }
});
