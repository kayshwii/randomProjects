let weapons = {
    shortsword : {
        power: 6
    },
    staff: {
        power: 20
    }
}

let player = {
    name: 'Casey',
    atk: 5,
    def: 4,
    hp: 10,
    weapon: weapons.shortsword
}

let skeleton = {
    name: 'Skeleton',
    atk: 3,
    def: 3,
    hp: 10,
    weapon: weapons.shortsword
}



let combat = function (attacking, defending) {
    let hpRemaining = defending.hp;
    let atkRoll = Math.floor(Math.random() * 20 + 1 + attacking.atk);
    let damage = Math.floor(Math.random() * attacking.weapon.power + 1 + attacking.atk);

    console.log('You rolled a ' + atkRoll);
    if (atkRoll >= defending.def + 10){
        hpRemaining -= damage;
        console.log('You did ' + damage + ' damage.');
    } else console.log('You missed!');
    console.log(defending.name + ' has ' + hpRemaining + ' health left.')
}


combat(player, skeleton)