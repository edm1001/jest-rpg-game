import Potion from "./Potion.js";
import Character from "./Character.js";

class Enemy extends Character{
  constructor(name, weapon) {
    super(name);
    this.Potion = new Potion();
    this.name = weapon;

  }
  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  };
}

export default Enemy;