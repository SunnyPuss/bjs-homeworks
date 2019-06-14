class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
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

    getDamage(){
        let damageDone;
        if (this.durability > this.durability * 30 / 100) {
            return damageDone = this.attack; 
        } else if (this.durability <= this.durability * 30 / 100) {
            return damageDone = this.attack / 2;
        } else if (this.durability == 0) {
            return damageDone = 0;
        }
    }
}

const arm = new  Weapon ("Рука", 1, "Infinity", 1);
const bow = new Weapon ("Лук", 10, 200, 3);
const sword = new Weapon ("Старый меч", 25, 500, 1);
   
sword.takeDamage(5);
console.log(sword.durability); // 5
  
sword.takeDamage(400);
console.log(sword.durability); // 0
console.log(sword.getDamage());

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1