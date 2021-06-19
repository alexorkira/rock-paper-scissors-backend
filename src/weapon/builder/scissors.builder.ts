import WeaponEnum from "../weapon.enum";
import WeaponBuilder from "./weapon.builder";
import Weapon from "../weapon";

class ScissorsBuilder extends WeaponBuilder {
  constructor() {
    super(WeaponEnum.SCISSORS);
  }

  build(): Weapon {
    super
      .setStrengths([WeaponEnum.PAPER]) //<-- Add other strengths here
      .setWeaknesses([WeaponEnum.ROCK]); //<-- Add other weaknesses here

    return super.build();
  }
}

export default ScissorsBuilder;
