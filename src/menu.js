const content = document.querySelector('#content');

function specialitySection() {
  const specialityDiv = document.createElement('div');
  specialityDiv.classList.add('speciality');
  const carte1 = document.createElement('div');
  const carte2 = document.createElement('div');
  carte1.classList.add('carte');
  carte2.classList.add('carte');
  const carteBorder1 = document.createElement('div');
  const carteBorder2 = document.createElement('div');
  carteBorder1.classList.add('carte-border');
  carteBorder2.classList.add('carte-border');
  const h3NewEntries = document.createElement('h3');
  h3NewEntries.textContent = 'New Entries';
  const ul1 = document.createElement('ul');
  const li1 = document.createElement('li');
  li1.textContent = 'Gazpacho soup';
  const li2 = document.createElement('li');
  li2.textContent = 'Poached salmon salad';
  const li3 = document.createElement('li');
  li3.textContent = 'Risotto primavera';
  const li4 = document.createElement('li');
  li4.textContent = 'Grilled lamb cutlets';
  const menuCTAButtonA = document.createElement('button');
  menuCTAButtonA.textContent = 'View Full Menu';
  menuCTAButtonA.classList.add('Menu');
  const menuCTAButtonB = document.createElement('button');
  menuCTAButtonB.textContent = 'View Full Menu';
  menuCTAButtonB.classList.add('Menu');
  const h3Mains = document.createElement('h3');
  h3Mains.textContent = 'Mains';
  const ul2 = document.createElement('ul');
  const li5 = document.createElement('li');
  li5.textContent = 'Vegetarian pizza';
  const li6 = document.createElement('li');
  li6.textContent = 'Spanish parma';
  const li7 = document.createElement('li');
  li7.textContent = 'Pan roasted salmon';
  const li8 = document.createElement('li');
  li8.textContent = 'Escalope of chicken';

  ul1.appendChild(li1);
  ul1.appendChild(li2);
  ul1.appendChild(li3);
  ul1.appendChild(li4);

  ul2.appendChild(li5);
  ul2.appendChild(li6);
  ul2.appendChild(li7);
  ul2.appendChild(li8);

  carteBorder1.appendChild(h3NewEntries);
  carteBorder1.appendChild(ul1);
  carteBorder1.appendChild(menuCTAButtonA);

  carteBorder2.appendChild(h3Mains);
  carteBorder2.appendChild(ul2);
  carteBorder2.appendChild(menuCTAButtonB);

  carte1.appendChild(carteBorder1);
  carte2.appendChild(carteBorder2);

  specialityDiv.appendChild(carte1);
  specialityDiv.appendChild(carte2);

  content.appendChild(specialityDiv);
}

export default function menuLoader() {
  specialitySection();
}
