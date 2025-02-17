import WeaponEnum from "../weapon.enum";
import Weapon from "../weapon";
import { PaperBuilder, RockBuilder, ScissorsBuilder } from "../builder";
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
      // Add a switch-case and the building of a new Weapon here
      default:
        throw new HttpException(`Not found the Weapon builder for ${type}`, HttpStatus.NOT_FOUND);
    }
  }
}

export default WeaponFactory;
