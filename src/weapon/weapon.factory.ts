import WeaponEnum from "./weapon.enum";
import Weapon from "./weapon";
import { PaperBuilder, RockBuilder, ScissorsBuilder } from "./builder";

export class WeaponFactory {
  public static createWeapon(type: WeaponEnum): Weapon {
    switch (type) {
      case WeaponEnum.ROCK:
        return new RockBuilder().setStrengths().setWeaknesses().build();
      case WeaponEnum.PAPER:
        return new PaperBuilder().setStrengths().setWeaknesses().build();
      case WeaponEnum.SCISSORS:
        return new ScissorsBuilder().setStrengths().setWeaknesses().build();
    }
    return null;
  }
}

export interface WeaponSuite {
  [key: string]: Weapon;
}

export class WeaponSuiteFactory {
  public static createWeaponSuite(): WeaponSuite {
    console.log("All weapons", Object.values(WeaponEnum));

    const rock: Weapon = WeaponFactory.createWeapon(WeaponEnum.ROCK);
    const paper: Weapon = WeaponFactory.createWeapon(WeaponEnum.PAPER);
    const scissors: Weapon = WeaponFactory.createWeapon(WeaponEnum.SCISSORS);
    return { rock, paper, scissors };
  }
}
