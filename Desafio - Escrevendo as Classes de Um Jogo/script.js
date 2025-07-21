class heroi{
    constructor(name, idade, tipo, ataque, vida, dano, defesa){
        this.name = name;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
        this.vida = vida;
        this.dano = dano;
        this.defesa = defesa;
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque} e causou ${this.dano} de dano!`);
    }

}


let mago = new heroi('Tokyo', 60, 'Mago', 'magia', 100, 40, 20);
let guerreiro = new heroi('Sett', 40, 'Guerreiro', 'espada', 200, 20, 40);
let monge = new heroi('Sukuna', 30, 'Monge', 'artes marciais', 180, 25, 30);
let ninja = new heroi('Natsu', 30, 'Ninja', 'shuriken', 120, 30, 25);
let arqueiro = new heroi('Kilua', 30, 'Arqueiro', 'arco e flecha', 110, 30, 20);
let assassino = new heroi('Nezuko', 30, 'Assassino', 'adagas', 150, 25, 35);

let herois = [mago, guerreiro, monge, ninja, arqueiro, assassino];
let totalDanoRodada = 0;
for (let heroi of herois) {
    totalDanoRodada += heroi.dano;
}


mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
arqueiro.atacar();
assassino.atacar();
console.log("================================================================");
console.log(`A equipe causou ${totalDanoRodada} de dano na rodada!`);
console.log("================================================================");