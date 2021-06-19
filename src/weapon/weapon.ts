import WeaponEnum from "./weapon.enum";
import WeaponBuilder from "./builder/weapon.builder";

class Weapon {
  name: WeaponEnum;

  strengths: WeaponEnum[];

  weaknesses: WeaponEnum[];

  constructor(builder: WeaponBuilder) {
    this.name = builder.Name;
    this.strengths = builder.Strengths;
    this.weaknesses = builder.Weaknesses;
  }
}
export default Weapon;
