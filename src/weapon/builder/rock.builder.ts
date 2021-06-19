import WeaponEnum from "../weapon.enum";
import WeaponBuilder from "./weapon.builder";

class RockBuilder extends WeaponBuilder {
  constructor() {
    super(WeaponEnum.ROCK);
  }

  setStrengths(): RockBuilder {
    // Add other strength here
    super.setStrengths([WeaponEnum.SCISSORS]);
    return this;
  }

  setWeaknesses(): RockBuilder {
    // Add other weaknesses here
    super.setWeaknesses([WeaponEnum.PAPER]);
    return this;
  }
}

export default RockBuilder;
