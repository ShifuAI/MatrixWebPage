console.log("hello");

const matrix = document.querySelector('.matrix');
const width = matrix.clientWidth;
const height = matrix.clientHeight;
const symbols = [];

function createSymbol(x, y) {
  const char = String.fromCharCode(Math.floor(Math.random() * 94) + 33); // Random printable ASCII character
  const symbol = document.createElement('span');
  symbol.textContent = char;

  symbol.style.color = 'lime';
  symbol.style.left = `${x}px`;
  symbol.style.top = `${y}px`;

  matrix.appendChild(symbol);
  symbols.push({ element: symbol, x, y, targetX: x, targetY: y });
}

function moveSymbols() {
  symbols.forEach((symbol) => {
    const { x, y, targetX, targetY, element } = symbol;

    // Calculate the distance to the target position
    const dx = targetX - x;
    const dy = targetY - y;

    // Calculate the distance to the target position
    const distance = Math.sqrt(dx * dx + dy * dy);

    // If the distance is greater than a small threshold, move the symbol
    if (distance > 2) {
      const newX = x + (dx / distance) * 2;
      const newY = y + (dy / distance) * 2;

      element.style.left = `${newX}px`;
      element.style.top = `${newY}px`;

      symbol.x = newX;
      symbol.y = newY;
    }
  });

  requestAnimationFrame(moveSymbols);
}

function createRandomHurtSymbols() {
  
  for (let i = 0; i < 5; i++) {
    // Define the shape of the "hurt" symbol here
    const hurtSymbolCoords = [
      [0, 0], [1, 0], [2, 0],
      [0, 1], [1, 1], [2, 1],
      [1, 2],
    ];

    // Randomly select the starting position for each "hurt" symbol
    const startX = Math.random() * (width - (hurtSymbolCoords[0].length * 10));
    const startY = Math.random() * (height - (hurtSymbolCoords.length * 10));

   
    

    // Create 5 symbols at the same starting position
   
   

    // Set the target positions for the symbols
    symbols.forEach((symbol, index) => {
      const dx = startX + (hurtSymbolCoords[index][0] * 10) - symbol.x;
      const dy = startY + (hurtSymbolCoords[index][1] * 10) - symbol.y;
      symbol.targetX = symbol.x + dx;
      symbol.targetY = symbol.y + dy;
    });
   
  }
}
 




for (let i = 0; i < 1000; i++) {
  const x = Math.random() * width;
  const y = Math.random() * height;
  createSymbol(x, y);
}



moveSymbols();
createRandomHurtSymbols(); // Create 5 sets of "hurt" symbols with random starting positions
























// ეს კოდი არის როცა უბრალოდ რანდომ სიმბოლოები ჩნდება სქრინზე?
/*
console.log("hello");

const matrix = document.querySelector('.matrix');
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_+-={}[]|\\:;"<>,.?/';
const width = matrix.clientWidth;
const height = matrix.clientHeight;

for (let i = 0; i < 500; i++) {
  const char = chars[Math.floor(Math.random() * chars.length)];
  const span = document.createElement('span');
  span.textContent = char;

  // Randomly select the color for each character
  if (Math.random() < 0.5) {
    span.style.color = 'lime'; // Lime color
  } else {
    span.style.color = '#8A2BE2'; // Pink color
  }

  span.style.left = `${Math.floor(Math.random() * width)}px`;
  span.style.top = `${Math.floor(Math.random() * height)}px`;
  matrix.appendChild(span);
}

// Create a function to animate the disappearance of a symbol
function animateDisappearance(symbol) {
  // Set the opacity to 0
  symbol.style.opacity = 0;

  // Remove the symbol from the DOM
  matrix.removeChild(symbol);
}

// Create a function to animate the appearance of a symbol in a new place
function animateAppearance(symbol, newX, newY) {
  // Get the color of the old symbol
  const oldColor = symbol.style.color;

  // Set the color of the appealed symbol to the old color
  symbol.style.color = oldColor;

  // Set the opacity to 0 initially
  symbol.style.opacity = 0;


  // Set the new left and top positions
  symbol.style.left = `${newX}px`;
  symbol.style.top = `${newY}px`;

  // Create an interval to animate the opacity of the appealed symbol
  const interval = setInterval(() => {
    symbol.style.opacity = 1;

 
    
  }, 100);

  // Add the appealed symbol to the DOM
  matrix.appendChild(symbol);
}

// Select all symbols in the matrix
const symbols = matrix.querySelectorAll('span');

// Start the animation loop
setInterval(() => {
  // Randomly select a symbol
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];

  // If the symbol is visible, animate its disappearance
  if (symbol.style.opacity === 1) {
    animateDisappearance(symbol);
  }

  // Generate new random coordinates for the symbol
  const newX = Math.floor(Math.random() * width);
  const newY = Math.floor(Math.random() * height);

  // Animate the appearance of the symbol in the new location
  animateAppearance(symbol, newX, newY);
}, 0.5); // Run the animation loop every 500 milliseconds */
