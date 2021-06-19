import WeaponEnum from "../weapon.enum";
import WeaponFactory from "./weapon.factory";
import { WeaponPack } from "../weapon-pack.interface";

export class WeaponPackFactory {
  public static createWeaponPack(): WeaponPack {
    const weaponPack = {};
    // Create the Weapon Pack depending the Weapon Enumeration
    Object.values(WeaponEnum).forEach((weaponName) => {
      weaponPack[weaponName] = WeaponFactory.createWeapon(<WeaponEnum>weaponName);
    });
    return weaponPack;
  }
}

export default WeaponPackFactory;
