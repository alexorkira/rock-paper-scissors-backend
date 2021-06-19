import WeaponEnum from "./weapon.enum";
import Weapon from "./weapon";
import { PaperBuilder, RockBuilder, ScissorsBuilder } from "./builder";
import { HttpException, HttpStatus } from "@nestjs/common";

export class WeaponFactory {
  public static createWeapon(type: WeaponEnum): Weapon {
    switch (type) {
      case WeaponEnum.ROCK:
        return new RockBuilder().build();
      case WeaponEnum.PAPER:
        return new PaperBuilder().build();
      case WeaponEnum.SCISSORS:
        return new ScissorsBuilder().build();
      default:
        throw new HttpException("Unknown type of weapon", HttpStatus.BAD_REQUEST);
    }
  }
}

export interface WeaponPack {
  [key: string]: Weapon;
}

export class WeaponPackFactory {
  public static createWeaponPack(): WeaponPack {
    const weaponPack = {};
    Object.values(WeaponEnum).forEach((weaponName) => {
      weaponPack[weaponName] = WeaponFactory.createWeapon(<WeaponEnum>weaponName);
    });
    return weaponPack;
  }
}
