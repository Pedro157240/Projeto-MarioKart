const player1 = {
    Nome: "Charmander",
    Velocidade: 5,
    Esquiva: 3,
    Ataque: 4,
    Pontos: 0
};  

const player2 = {
    Nome: "Bulbassaur",

    Velocidade: 4,
    Esquiva: 4,
    Ataque: 4,
    Pontos: 0
};

const player3 = {
    Nome: "Squirtle",

    Velocidade: 3,
    Esquiva: 5,
    Ataque: 3,
    Pontos: 0
};

const player4 = {
    Nome: "Axew",

    Velocidade: 5,
    Esquiva: 4,
    Ataque: 5,
    Pontos: 0
};

 async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "Correr"
            break;

        case random < 0.66:
            result = "Desviar"
            break;
        default:
            result = "Atrapalhar"
    }

    return result
}

async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round < 6; round++) {
        console.log(`Turno ${round}`);

 // Sortear ação
let block = await getRandomBlock()
console.log(`Ação: ${block}`);

// Rolar os dados
let diceResult1 = await rollDice();
let diceResult2 = await rollDice();

// Teste de habilidade
let totalTestSkill1 = 0;
let totalTestSkill2 = 0;

 if (block === "Correr"){
    totalTestSkill1 = diceResult1 + character1.Velocidade;
    totalTestSkill2 = diceResult2 + character2.Velocidade;

    await logRollResult(
        character1.Nome,
         "Velocidade",
          diceResult1,
           character1.Velocidade
        );

    await logRollResult(
        character2.Nome,
         "Velocidade",
          diceResult2,
           character2.Velocidade
        );
 if (totalTestSkill1 > totalTestSkill2){
    console.log(`${character1.Nome} dispara pra fugir!`);
    character1.Pontos++;

 } else if (totalTestSkill2 > totalTestSkill1) {
    console.log(`${character2.Nome} dispara pra fugir!`);
    character2.Pontos++;

 } else {console.log(`Inacreditável! Ambos correram na mesma velocidade!`)}
}

 if (block === "Desviar"){
    totalTestSkill1 = diceResult1 + character1.Esquiva;
    totalTestSkill2 = diceResult2 + character2.Esquiva;

    await logRollResult(
        character1.Nome,
         "Esquiva",
          diceResult1,
           character1.Esquiva
        );

        await logRollResult(
        character2.Nome,
         "Esquiva",
          diceResult2,
           character2.Esquiva
        );

 if (totalTestSkill1 > totalTestSkill2){
    console.log(`${character1.Nome} desvia da pokebola e continua correndo!`);
    character1.Pontos++;

 } else if (totalTestSkill2 > totalTestSkill1) {
    console.log(`${character2.Nome} desvia da pokebola e continua correndo!`);
    character2.Pontos++;

 } else {console.log(`Que sorte! Ambos desviaram da pokebola!`)}
}

 if (block === "Atrapalhar"){
    let powerResult1 = diceResult1 + character1.Ataque;
    let powerResult2 = diceResult2 + character2.Ataque;


    console.log(`${character1.Nome} atrapalhou a fuga de ${character2.Nome}!`);

        await logRollResult(
        character1.Nome,
         "Ataque",
          diceResult1,
           character1.Ataque
        );

        await logRollResult(
        character2.Nome,
         "Ataque",
          diceResult2,
           character2.Ataque
        );

 if (powerResult1 > powerResult2) {
        console.log(`${character1.Nome} atrapalhou o ${character2.Nome}! ${character2.Nome} fica perdidinho!`);
} else if (powerResult2 > powerResult1) {
        console.log(`${character2.Nome} atrapalhou o ${character1.Nome}! ${character1.Nome} fica perdidinho!`);
} else {console.log("Ninguém foi atrapalhado desta vez!");}

}

 console.log("=====================================");
 }
}

async function declareWinner(character1, character2){
    console.log("Resultado final:")
    console.log(`${character1.Nome}: ${character1.Pontos} ponto(s)`)
    console.log(`${character2.Nome}: ${character2.Pontos} ponto(s)`)

    if(character1.Pontos > character2.Pontos) 
        console.log(`\n${character1.Nome} conseguiu fugir do treinador! Que sorte!`);

    else if(character2.Pontos > character1.Pontos) 
        console.log(`\n${character2.Nome} conseguiu fugir do treinador! Que sorte!`);

    else console.log("Nenhum dos dois escaparam...");
}

async function main(character1, character2) {
    console.log(`Um treinador apareceu! ${character1.Nome} e ${character2.Nome}, fujam!! \n`);

await playRaceEngine(character1, character2);
await declareWinner(character1, character2);
}

main(player3, player1);
