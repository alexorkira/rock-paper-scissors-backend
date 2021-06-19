import WeaponEnum from "../weapon.enum";
import WeaponBuilder from "./weapon.builder";

class PaperBuilder extends WeaponBuilder {
  constructor() {
    super(WeaponEnum.PAPER);
  }

  setStrengths(): PaperBuilder {
    // Add other strength here
    super.setStrengths([WeaponEnum.ROCK]);
    return this;
  }

  setWeaknesses(): PaperBuilder {
    // Add other weaknesses here
    super.setWeaknesses([WeaponEnum.SCISSORS]);
    return this;
  }
}

export default PaperBuilder;
