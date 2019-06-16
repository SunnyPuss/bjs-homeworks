class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.fullDurability = durability
    }

    takeDamage(damage) {
        this.durability = this.durability - damage;
        if (this.durability <= 0) {
        return this.durability = 0;
        } else if( this.durability == "Infinity") {
            return this.durability = "Infinity";
        }
        return this.durability;
    }

    getDamage() {
        let damageDone;
        if(this.durability == "Infinity") {
            return damageDone = this.attack;
        } else if (this.durability == 0) {
            return damageDone = 0; 
        } else if (this.durability <= this.fullDurability * 30 / 100) {
            return damageDone = this.attack / 2;
        } else if (this.durability > this.fullDurability * 30 / 100) {
            return damageDone = this.attack;
        }
    }

    isBroken() {
        return this.durability === 0;
    }
}

// Tier 2 Weapon
const arm = new  Weapon ("Рука", 1, "Infinity", 1);
const bow = new Weapon ("Лук", 10, 200, 3);
const sword = new Weapon ("Старый меч", 25, 500, 1);
const knife = new Weapon ("Нож", 5, 300, 1);
const staff = new Weapon ("Посох", 8, 300, 2);

// Tier 1 Weapon
const longBow = new Weapon ("Длинный лук", 15, bow.durability, 4);
const axe = new Weapon ("Секира", 27, 800, sword.range);
const staffOfTempest = new Weapon ("Посох Бури", 10, staff.durability, 3);

sword.takeDamage(5);
console.log(sword.durability);
  
sword.takeDamage(400);
console.log(sword.durability);
console.log(sword.getDamage());

bow.takeDamage(300);
console.log(bow.durability);
console.log(bow.getDamage());

console.log(arm.durability);
console.log(arm.getDamage());

console.log(bow.durability);
console.log(bow.isBroken());

console.log(arm.durability);
console.log(arm.isBroken());

console.log(axe.durability);
console.log(axe.getDamage());

console.log(longBow.durability);
console.log(longBow.getDamage());

// Task 2

class Arm extends Weapon {
    constructor (name, attack, durability, range){
        super (name, attack, durability, range)
    }
}

class Bow extends Weapon {
    constructor (name, attack, durability, range){
        super (name, attack, durability, range)
    }
}

class Sword extends Weapon {
    constructor (name, attack, durability, range){
        super (name, attack, durability, range)
    }
}

class Knife extends Weapon {
    constructor (name, attack, durability, range){
        super (name, attack, durability, range)
    }
}

class Staff extends Weapon {
    constructor (name, attack, durability, range){
        super (name, attack, durability, range)
    }
}

// tier 2 weapon

class LongBow extends Bow {
    constructor (name, attack, durability, range){
        super (name, attack, durability, range)
    }
}

class Axe extends Sword {
    constructor (name, attack, durability, range){
        super (name, attack, durability, range)
    }
}

class StaffOfTempest extends Staff {
    constructor (name, attack, durability, range){
        super (name, attack, durability, range)
    }
}

const bow2 = new Bow("Лук", 10, 200, 3);

console.log(bow2.name);
console.log(bow2.attack);
console.log(bow2.durability);
console.log(bow2.range);

const longBow2 = new LongBow ("Длинный Лук", 15, 200, 4);

console.log(longBow2.name);
console.log(longBow2.attack);
console.log(longBow2.durability);
console.log(longBow2.range);