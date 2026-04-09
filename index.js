const player1 = {
    Nome: "Charmander",
    Ataque: 5,
    Defesa: 3,
};  

const player2 = {
    Nome: "Bulbassaur",
    Ataque: 4,
    Defesa: 4,
};

const player3 = {
    Nome: "Squirtle",
    Ataque: 3,
    Defesa: 5,
};

const player4 = {
    Nome: "Axew",
    Ataque: 5,
    Defesa: 4,
};

 async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

(async function main() {
    console.log(`Uma batalha entre ${player1.Nome} e ${player2.Nome} foi iniciada... \n`);
})();