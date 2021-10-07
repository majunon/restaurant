// Get images
import Logo from './logo.jpg';

import homeLoader from './home';
import menuLoader from './menu';
import aboutLoader from './about';

const content = document.querySelector('#content');

// Clean the page of all the 'content'
function clearPage() {
  while (content.lastChild) {
    content.removeChild(content.lastChild);
  }
}

function footerSection() {
  const footerDiv = document.createElement('div');
  footerDiv.classList.add('footer');
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info');
  const directionsDiv = document.createElement('div');
  directionsDiv.classList.add('directions');
  const directionP1 = document.createElement('p');
  const directionP2 = document.createElement('p');
  const directionP3 = document.createElement('p');
  directionP1.textContent = "760 route d'Uchaux";
  directionP2.textContent = '84420 PIOLENC';
  directionP3.textContent = '06 06 06 06 06';
  const horairesDiv = document.createElement('div');
  horairesDiv.classList.add('horaires');
  const horairesP1 = document.createElement('p');
  const horairesP2 = document.createElement('p');
  horairesP1.textContent = 'Lundi-Samedi 11:00 - 22:00';
  horairesP2.textContent = 'Dimanche 11:00 - 15:00';
  const copyrightDiv = document.createElement('div');
  copyrightDiv.classList.add('copyright');
  copyrightDiv.textContent = 'Copyright © 2021 Julien Fayard';
  directionsDiv.appendChild(directionP1);
  directionsDiv.appendChild(directionP2);
  directionsDiv.appendChild(directionP3);
  horairesDiv.appendChild(horairesP1);
  horairesDiv.appendChild(horairesP2);
  infoDiv.appendChild(directionsDiv);
  infoDiv.appendChild(horairesDiv);
  footerDiv.appendChild(infoDiv);
  footerDiv.appendChild(copyrightDiv);
  content.appendChild(footerDiv);
}

function navSection() {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header-nav');

  const logoImg = document.createElement('img');
  logoImg.src = Logo;
  logoImg.style.width = '150px';

  const rightNav = document.createElement('div');
  rightNav.classList.add('nav-right');

  const homeButton = document.createElement('button');
  homeButton.classList.add('home-button');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', () => {
    clearPage();
    navSection();
    homeLoader();
    footerSection();
  });
  const aboutButton = document.createElement('button');
  aboutButton.classList.add('about-button');
  aboutButton.textContent = 'About us';
  aboutButton.addEventListener('click', () => {
    clearPage();
    navSection();
    aboutLoader();
    footerSection();
  });
  const menuButton = document.createElement('button');
  menuButton.classList.add('menu-button');
  menuButton.textContent = 'Menus';
  menuButton.addEventListener('click', () => {
    clearPage();
    navSection();
    menuLoader();
    footerSection();
  });
  const reservationButton = document.createElement('button');
  reservationButton.classList.add('reservation-button');
  reservationButton.textContent = 'Reservations';
  const newsButton = document.createElement('button');
  newsButton.classList.add('news-button');
  newsButton.textContent = 'News';
  const contactButton = document.createElement('button');
  contactButton.classList.add('contact-button');
  contactButton.textContent = 'Contact';

  rightNav.appendChild(homeButton);
  rightNav.appendChild(aboutButton);
  rightNav.appendChild(menuButton);
  rightNav.appendChild(reservationButton);
  rightNav.appendChild(newsButton);
  rightNav.appendChild(contactButton);

  headerDiv.appendChild(logoImg);
  headerDiv.appendChild(rightNav);

  content.appendChild(headerDiv);
}

export default function initialize() {
  navSection();
  homeLoader();
  footerSection();
}
