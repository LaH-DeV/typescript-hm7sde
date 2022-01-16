// Import stylesheets
import './style.css';
import Suggesitons, { suggestion } from './suggestions';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

async function getSuggestions() {
  const response = await fetch('https://ec-search.herokuapp.com/suggestions');
  const data = await response.json();
  return data;
}
let suggestions: Suggesitons;
const button: HTMLButtonElement = document.createElement('button');
button.addEventListener('click', () => {
  const ul: HTMLUListElement = document.createElement('ul');
  suggestions.suggetions.forEach((element: suggestion) => {
    const li: HTMLLIElement = document.createElement('li');
    li.textContent = element.value;
    ul.appendChild(li);
  });
  appDiv.appendChild(ul);
});

appDiv.appendChild(button);

getSuggestions().then((data: suggestion[]) => {
  if (data) {
    suggestions = new Suggesitons(data);
  }
});
