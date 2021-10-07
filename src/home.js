const content = document.querySelector('#content');

function heroSection() {
  const heroDiv = document.createElement('div');
  heroDiv.classList.add('hero-image');

  const header1Hero = document.createElement('h1');
  header1Hero.textContent = 'Restaurants & cafés';

  const genericDiv1 = document.createElement('div');

  const heroP = document.createElement('p');
  heroP.textContent = 'Delicio is the perfect solution to create a beautiful website not just for restaurants and coffee shops, but for any business looking to create a captivating presence online. The theme is easy to manage, with a drag-and-drop interface and fully customizable using the Theme Customizer. We allow you to manage content and menus, with simplicity in mind — making updates to your menu a breeze.';

  const menuCTAButton1 = document.createElement('button');
  menuCTAButton1.classList.add('Menu');
  menuCTAButton1.textContent = 'View Menu';

  genericDiv1.appendChild(heroP);

  heroDiv.appendChild(header1Hero);
  heroDiv.appendChild(genericDiv1);
  heroDiv.appendChild(menuCTAButton1);

  content.appendChild(heroDiv);
}

function welcomeSection() {
  const welcomeDiv = document.createElement('div');
  welcomeDiv.classList.add('welcome-words');

  const header2 = document.createElement('h2');

  const welcomeP = document.createElement('p');
  welcomeP.textContent = 'Delicio Theme is the perfect solution to create a beautiful website not just for restaurants and coffee shops, but for any business looking to create a captivating presence online. The theme is easy to manage, with a drag-and-drop interface and fully customizable using the Theme Customizer. We allow you to manage content and menus, with simplicity in mind — making updates to your menu a breeze.';

  const aboutCTAButton = document.createElement('button');
  aboutCTAButton.textContent = 'About us';

  welcomeDiv.appendChild(header2);
  welcomeDiv.appendChild(welcomeP);
  welcomeDiv.appendChild(aboutCTAButton);

  content.appendChild(welcomeDiv);
}

export default function homeLoader() {
  heroSection();
  welcomeSection();
}
