const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();

  // 1. Sekundenzeiger
  const seconds = now.getSeconds();
  // Grad: (Sekunden / 60) * 360 Grad + 90 Grad Startversatz (wegen CSS transform-origin 100%)
  const secondsDegrees = ((seconds / 60) * 360) + 90; 
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // 2. Minutenzeiger
  const minutes = now.getMinutes();
  // Grad: (Minuten / 60) * 360 + (Sekunden / 60 * 6) für fließenden Übergang + 90 Grad Startversatz
  const minsDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  // 3. Stundenzeiger
  const hours = now.getHours();
  // Grad: (Stunden / 12) * 360 + (Minuten / 60 * 30) für fließenden Übergang + 90 Grad Startversatz
  const hourDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Aktualisiert die Funktion jede Sekunde (1000ms)
setInterval(setDate, 1000);

// Ruft die Funktion einmal direkt auf, damit die Uhr sofort die richtige Zeit anzeigt 
// und nicht erst nach einer Sekunde
setDate();
