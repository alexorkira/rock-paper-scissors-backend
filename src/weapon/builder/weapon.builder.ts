import WeaponEnum from "../weapon.enum";
import Weapon from "../weapon";

class WeaponBuilder {
  private readonly name: WeaponEnum;

  strengths: WeaponEnum[];

  weaknesses: WeaponEnum[];

  constructor(name: WeaponEnum) {
    this.name = name;
    this.strengths = [];
    this.weaknesses = [];
  }

  setStrengths(strength: WeaponEnum[]): WeaponBuilder {
    this.strengths = strength;
    return this;
  }

  setWeaknesses(weaknesses: WeaponEnum[]): WeaponBuilder {
    this.weaknesses = weaknesses;
    return this;
  }

  build(): Weapon {
    return new Weapon(this);
  }

  get Name() {
    return this.name;
  }

  get Strengths() {
    return this.strengths;
  }

  get Weaknesses() {
    return this.weaknesses;
  }
}

export default WeaponBuilder;
