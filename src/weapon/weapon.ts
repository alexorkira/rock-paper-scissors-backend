import WeaponEnum from "./weapon.enum";
import WeaponBuilder from "./builder/weapon.builder";

class Weapon {
  name: WeaponEnum;

  /**
   * List of strengths of this Weapon.
   * If the opponent choices one of those, this weapon has the upper hand
   */
  strengths: WeaponEnum[];

  /**
   * List of weakness of this Weapon.
   * If the opponent choices one of those, this weapon has no escape
   */
  weaknesses: WeaponEnum[];

  // The Weapon can be constructed only via the Builder
  constructor(builder: WeaponBuilder) {
    this.name = builder.Name;
    this.strengths = builder.Strengths;
    this.weaknesses = builder.Weaknesses;
  }
}
export default Weapon;
