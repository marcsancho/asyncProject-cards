let monster1 = {
    name: "Monster A",
    health: 100,
    avatar: `https://robohash.org/${Math.random().toString(36).substring(2)}?set=set2`
};

let monster2 = {
    name: "Monster B",
    health: 100,
    avatar: `https://robohash.org/${Math.random().toString(36).substring(2)}?set=set2`
};

const updateArena = () => {
    document.getElementById("monster1").innerHTML = `
    <h3>${monster1.name}</h3>
    <img src="${monster1.avatar}" alt="${monster1.name}">
    <p>Salud: ${monster1.health}</p>
  `;
    document.getElementById("monster2").innerHTML = `
    <h3>${monster2.name}</h3>
    <img src="${monster2.avatar}" alt="${monster2.name}">
    <p>Salud: ${monster2.health}</p>
  `;
};

const fightRound = () => {
    if (monster1.health <= 0 || monster2.health <= 0) return;

    const damageTo1 = Math.floor(Math.random() * 16) + 5;
    const damageTo2 = Math.floor(Math.random() * 16) + 5;

    monster1.health = Math.max(0, monster1.health - damageTo1);
    monster2.health = Math.max(0, monster2.health - damageTo2);

    updateArena();

    if (monster1.health === 0 || monster2.health === 0) {
        let winner = monster1.health > monster2.health ? monster1.name : monster2.name;
        document.getElementById("result").innerText = `¡Winner: ${winner}!`;
        document.getElementById("fightButton").disabled = true;
    }
};

document.getElementById("fightButton").addEventListener("click", fightRound);
updateArena();
