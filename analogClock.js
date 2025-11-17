const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();

  // 1. Seconds hand
  const seconds = now.getSeconds();
  // Degrees: (seconds / 60) * 360 + 90 degree offset (because of CSS transform-origin 100%)
  const secondsDegrees = ((seconds / 60) * 360) + 90; 
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // 2. Minutes hand
  const minutes = now.getMinutes();
  // Degrees: (minutes / 60) * 360 + (seconds / 60 * 6) for smooth movement + 90 degree offset
  const minsDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  // 3. Hours hand
  const hours = now.getHours();
  // Degrees: (hours / 12) * 360 + (minutes / 60 * 30) for smooth movement + 90 degree offset
  const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Update the clock every second (1000ms)
setInterval(setDate, 1000);

// Call the function once immediately so the clock shows the correct time immediately
// and not after one second
setDate();
