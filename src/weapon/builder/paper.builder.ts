import WeaponEnum from "../weapon.enum";
import WeaponBuilder from "./weapon.builder";
import Weapon from "../weapon";

class PaperBuilder extends WeaponBuilder {
  constructor() {
    super(WeaponEnum.PAPER);
  }

  build(): Weapon {
    super
      .setStrengths([WeaponEnum.ROCK]) //<-- Add other strengths here
      .setWeaknesses([WeaponEnum.SCISSORS]); //<-- Add other weaknesses here

    return super.build();
  }
}

export default PaperBuilder;
