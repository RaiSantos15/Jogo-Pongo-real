// Variaveis 
let comprimemtoTela = 600;
let larguraTela = 400;

// variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;
let raioBolinha = diametroBolinha/2
let velocidadeXBolinha = 6; 
let velocidadeYBolinha = 6;

//variaveis raquete
let xRaquete = 5
let yRaquete = 150
let LarguraRaquete = 15
let AlturaRaquete = 85


// Cenário
function setup() {
  createCanvas(comprimemtoTela, larguraTela); 
}

function draw() {
  background(120);
  
  circle(xBolinha, yBolinha, diametroBolinha);
  
  // Movimento da bolinha
  xBolinha += velocidadeXBolinha
 yBolinha += velocidadeYBolinha
  
  // Colisão da bolinha
  if (xBolinha + raioBolinha > comprimemtoTela || xBolinha - raioBolinha < 0){
    velocidadeXBolinha = velocidadeXBolinha *-1 
  }
  
  if (yBolinha + raioBolinha > larguraTela || yBolinha - raioBolinha < 0){
    velocidadeYBolinha = velocidadeYBolinha *-1
  }
  
  // criação da raquete
  rect(xRaquete, yRaquete, LarguraRaquete, AlturaRaquete);
  
  
// Movimento da Raquete
  if (keyIsDown(UP_ARROW)){
   yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
   yRaquete += 10;
  }
  
  if (xBolinha - raioBolinha < xRaquete +  LarguraRaquete){ velocidadeXBolinha *= -1

}
  
 

}