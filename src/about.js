import Cook1 from './cook1.jpg';
import Cook2 from './cook2.jpg';
import Cook3 from './cook3.jpg';

const content = document.querySelector('#content');

function teamSection() {
  const teamDiv = document.createElement('div');
  teamDiv.classList.add('team');

  const teamMember1 = document.createElement('div');
  teamMember1.classList.add('team-member');
  const imgTeam1 = document.createElement('img');
  imgTeam1.src = Cook1;
  imgTeam1.style.width = '250px';
  const header3team1 = document.createElement('h3');
  header3team1.textContent = 'Maria Donatelo';
  const team1P = document.createElement('p');
  team1P.textContent = 'This is some dummy copy. You’re not really supposed to read this dummy copy, it is just a place holder for people who need some type to visualize what the actual copy might look like if it were real content.';

  const teamMember2 = document.createElement('div');
  teamMember2.classList.add('team-member');
  const imgTeam2 = document.createElement('img');
  imgTeam2.src = Cook2;
  imgTeam2.style.width = '250px';
  const header3team2 = document.createElement('h3');
  header3team2.textContent = 'Angelina Tanelli';
  const team2P = document.createElement('p');
  team2P.textContent = 'This is some dummy copy. You’re not really supposed to read this dummy copy, it is just a place holder for people who need some type to visualize what the actual copy might look like if it were real content.';

  const teamMember3 = document.createElement('div');
  teamMember3.classList.add('team-member');
  const imgTeam3 = document.createElement('img');
  imgTeam3.src = Cook3;
  imgTeam3.style.width = '250px';
  const header3team3 = document.createElement('h3');
  header3team3.textContent = 'Dylan Gilmore';
  const team3P = document.createElement('p');
  team3P.textContent = 'This is some dummy copy. You’re not really supposed to read this dummy copy, it is just a place holder for people who need some type to visualize what the actual copy might look like if it were real content.';

  teamMember1.appendChild(imgTeam1);
  teamMember1.appendChild(header3team1);
  teamMember1.appendChild(team1P);

  teamMember2.appendChild(imgTeam2);
  teamMember2.appendChild(header3team2);
  teamMember2.appendChild(team2P);

  teamMember3.appendChild(imgTeam3);
  teamMember3.appendChild(header3team3);
  teamMember3.appendChild(team3P);

  teamDiv.appendChild(teamMember1);
  teamDiv.appendChild(teamMember2);
  teamDiv.appendChild(teamMember3);

  content.appendChild(teamDiv);
}

export default function aboutLoader() {
  teamSection();
}
