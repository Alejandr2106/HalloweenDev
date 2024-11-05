function battleHorde(zombies, humans) {
    let zombiePower = zombies.split('').map(Number);
    let humanPower = humans.split('').map(Number);

    let zombieWinCount = 0; // Contador de victorias de los zombies
    let humanWinCount = 0; // Contador de victorias de los humanos

    for (let i = 0; i < zombiePower.length; i++) {

        if (zombiePower[i] > humanPower[i]) {
            const powerDifference = zombiePower[i] - humanPower[i];
            if (i + 1 < zombiePower.length) {
                zombiePower[i + 1] += powerDifference;
            }
            zombieWinCount++;

        } else if (humanPower[i] > zombiePower[i]) {
            const powerDifference = humanPower[i] - zombiePower[i];
            if (i + 1 < humanPower.length) {
                humanPower[i + 1] += powerDifference;
            }
            humanWinCount++;

        } else {
            console.log("Resultado: Empate");
        }

    }

    // Verificar si el último ganador es opuesto al que lleva la delantera
    const lastZombiePower = zombiePower[zombiePower.length - 1];
    const lastHumanPower = humanPower[humanPower.length - 1];

    if (lastZombiePower > lastHumanPower && humanWinCount > zombieWinCount) {
        zombieWinCount += humanWinCount;
        humanWinCount = 0; // Reiniciar contador de victorias de humanos
    } else if (lastHumanPower > lastZombiePower && zombieWinCount > humanWinCount) {
        humanWinCount += zombieWinCount;
        zombieWinCount = 0; // Reiniciar contador de victorias de zombies
    }

    if (lastZombiePower === lastHumanPower) {
        return "x";
    } else if (zombieWinCount > humanWinCount) {
        return `${zombieWinCount}z`;
    } else {
        return `${humanWinCount}h`;
    }
}
