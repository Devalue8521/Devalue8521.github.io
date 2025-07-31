import { uma } from './uma.js';

// Fonction pour obtenir un uma au hasard
function getRandomUma() {
    const index = Math.floor(Math.random() * uma.length);
    return uma[index];
}

// Attendre que le DOM soit chargé

window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const display = document.querySelector('.displayUma');
    button.addEventListener('click', () => {
        const randomUma = getRandomUma();
        display.innerHTML = `<h1>${randomUma.name}</h1><br><img src="${randomUma.image}" alt="${randomUma.name}">`;
    });
});

