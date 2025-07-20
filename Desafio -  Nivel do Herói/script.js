const heroi = ["Vingador das Sobras", 5600, 100, 120];
let xpHeroi = heroi[1];
let nivelHeroi = ""
let vidaHeroi = heroi[2];
let ataqueHeroi = heroi[3];



let monstro = ["Dragão do Abismo", 8000, 500, 80] 
let vidaMonstro = monstro[2];
let ataqueMonstro = monstro[3];

let bossDerrotado = false;
let numeroDeAtaques = 5;

for (let i = 0; i < numeroDeAtaques ; i++) {
    vidaMonstroBatalha = vidaMonstro -= ataqueHeroi;
    if (vidaMonstroBatalha <= 0) {
        bossDerrotado = true;
        console.log("O Herói " + heroi[0] + " derrotou o monstro " + monstro[0] + "!");
        break;
    }
    else {
        console.log("O Herói " + heroi[0] + " atacou o monstro " + monstro[0] + "a vida atual do monstro é " + vidaMonstroBatalha);
    }
}

if (bossDerrotado) {
    xpHeroi += 2000;
    console.log("O Herói " + heroi[0] + " ganhou 2000 de XP!");
}


if (xpHeroi <= 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivelHeroi = "Lendário";
} else {
    nivelHeroi = "Radianate";
}

console.log ("O Herói do nome " + heroi[0] + " está no nível " + nivelHeroi + " com " + xpHeroi + " de XP.");

