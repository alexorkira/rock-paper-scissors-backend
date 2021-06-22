import WeaponFactory from "./weapon.factory";
import WeaponEnum from "../weapon.enum";
import { HttpStatus } from "@nestjs/common";

describe("Weapon Factory", () => {
  it("Should throw an exception if there is no builder for selected Weapon", () => {
    const mockSpock = "spock";
    try {
      WeaponFactory.createWeapon(mockSpock as WeaponEnum);
    } catch (e) {
      expect(e.status).toEqual(HttpStatus.NOT_FOUND);
      expect(e.message).toEqual(`Not found the Weapon builder for ${mockSpock}`);
    }
  });
});
