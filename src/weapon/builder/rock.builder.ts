import WeaponEnum from "../weapon.enum";
import WeaponBuilder from "./weapon.builder";
import Weapon from "../weapon";

class RockBuilder extends WeaponBuilder {
  constructor() {
    super(WeaponEnum.ROCK);
  }

  build(): Weapon {
    super
      .setStrengths([WeaponEnum.SCISSORS]) //<-- Add other strength here
      .setWeaknesses([WeaponEnum.PAPER]); //<-- Add other weaknesses here

    return super.build();
  }
}

export default RockBuilder;
