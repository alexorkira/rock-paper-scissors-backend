import { Injectable } from "@nestjs/common";
import WeaponEnum from "./weapon/weapon.enum";
import Weapon from "./weapon/weapon";

@Injectable()
export class AppService {
  private weapons: Weapon[];

  constructor() {
    this.weapons = [
      { id: WeaponEnum.ROCK, strongerThan: [WeaponEnum.SCISSORS] },
      { id: WeaponEnum.PAPER, strongerThan: [WeaponEnum.ROCK] },
      { id: WeaponEnum.SCISSORS, strongerThan: [WeaponEnum.PAPER] },
    ];
  }

  /**
   * Returns a random choice between the all Weapons set up
   */
  getRandomWeapon(): WeaponEnum {
    return Math.floor(Math.random() * this.weapons.length);
  }
}
