import WeaponEnum from "../weapon.enum";
import WeaponBuilder from "./weapon.builder";

class ScissorsBuilder extends WeaponBuilder {
  constructor() {
    super(WeaponEnum.SCISSORS);
  }

  setStrengths(): ScissorsBuilder {
    // Add other strength here
    super.setStrengths([WeaponEnum.PAPER]);
    return this;
  }

  setWeaknesses(): ScissorsBuilder {
    // Add other weaknesses here
    super.setWeaknesses([WeaponEnum.ROCK]);
    return this;
  }
}

export default ScissorsBuilder;
