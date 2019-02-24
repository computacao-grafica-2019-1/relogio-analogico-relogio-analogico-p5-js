//*******************************************//

//variaveis dimensao circulo
var w; //largura
var h; //altura
//*******************************************//

//variaveis elipse 3 objeto
var elix = 200; // posicionamento x 'largura'
var eliy = 200; // posicionamento y 'altura'
var elit = 20; // tamaho do circulo
//*******************************************//

// variaveis do triangulo Ponteiro Pequeno
let ponpx1 = 270;   
let ponpy1 = 190;
let ponpx2 = 270;
let ponpy2 = 210;
let ponpx3 = 280;
let ponpy3 = 200;
//*******************************************//

// variaveis do triangulo Ponteiro Grande
let pongx1 = 190;   
let pongy1 = 115;
let pongx2 = 200;
let pongy2 = 104;
let pongx3 = 209;
let pongy3 = 115;
//*******************************************//


function setup() {
  createCanvas(400, 400);
  
  // centro do desenho e circulo
  cirx1 = width/2 ;
  ciry1 = height/2;
//*******************************************//
  
	// variaveis do circulo2
  x2 = cirx1;
	y2 = ciry1;
//*******************************************//
  
  //variaveis do circulo3
  x3 = cirx1;
  y3 = ciry1 ;
//*******************************************//
  
  //dimensoes dos circulos	
  w = 250;
  h = 250;
	w2 = 215;
	h2 = 215;
	w3 = 25
	h3 = 25
//*******************************************//
  
}

function draw() {
  background(255);
	noFill();
  
  //variaves de cores modo RGB
  let vermelho = color(255,0,0);
  let preto = color(0);
  let amarelo = color(255,255,0,70);//cor modo rgba
  let branco = color(255);
//*******************************************//
	
  //variavel espessura da borda dos objetos
	let espborda = 2;
//*******************************************//
  
	//Arco 1 objeto 1
	fill(branco);
	strokeWeight(espborda);
  stroke(preto);
  arc(x3, y3, w, h, PI * 0, 8);
  noFill();
  noStroke();
//*******************************************//
  
	//Arco 2 objeto 2
  fill(amarelo);
  strokeWeight(espborda);
  stroke(preto); //funçao para aplicar cor na borda
  arc(x2, y2, w2, h2, PI * 0.25, 8);
  noFill();
  noStroke();
//*******************************************//
  
  //Ponteiro Menor
  espborda = 5;
  stroke(vermelho);//utilizado para preencher a cor da linha
  strokeWeight(espborda);//A espessura da borda precisa vir antes do objeto
  line(200, 200, 270, 200);
  noStroke();
//*******************************************//
  
  //Ponteiro Maior
  stroke(vermelho);
	//  xp1   yp1
  line(200, 200, 200, 112);
  strokeWeight(espborda);
  noStroke();
//*******************************************//  
  
  //Elipse central objeto 3
  fill(preto); //funçao para preencher fundo do objeto
  stroke(branco); //funçao para aplicar cor na borda
	ellipse(elix, eliy, elit);
  noFill(); //funçao para fechar preenchimento
  noStroke();//funçao para fechar aplicacoes na borda
//*******************************************//
	
  //Triangulo do Ponteiro Pequeno
	espborda = 2;
  stroke(branco);
  strokeWeight(espborda);
	fill(vermelho);
  triangle(ponpx1, ponpy1, ponpx2, ponpy2, ponpx3, ponpy3);
  noFill();
  noStroke();
//*******************************************//
	
  //Triangulo do Ponteiro Grande
	espborda = 2;
  stroke(branco);
  strokeWeight(espborda);
	fill(vermelho);
  triangle(pongx1, pongy1, pongx2, pongy2, pongx3, pongy3);
  noFill();
  noStroke();
//*******************************************//
 
}