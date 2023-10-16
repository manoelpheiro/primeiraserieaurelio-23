let sunX, sunY; // Posição do sol
let plants = []; // Array para armazenar informações das plantas

function setup() {
  createCanvas(800, 600);
  sunX = width / 2;
  sunY = height / 4;

  // Criar algumas plantas
  for (let i = 0; i < 5; i++) {
    let plantX = random(width);
    let plantY = random(height - 100, height - 50);
    let plantHeight = random(50, 150);
    plants.push({ x: plantX, y: plantY, height: plantHeight });
  }
}

function draw() {
  background(220);

  // Desenhar o sol
  fill(255, 200, 0);
  noStroke();
  ellipse(sunX, sunY, 100, 100);

  // Desenhar as plantas
  fill(34, 139, 34); // Cor verde para as plantas
  for (let plant of plants) {
    rect(plant.x, plant.y - plant.height, 20, plant.height);
  }

  // Animar o sol para subir
  sunY -= 0.5;
  if (sunY < -50) {
    sunY = height + 50;
  }
}