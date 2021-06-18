import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import WeaponEnum from "./weapon/weapon.enum";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getComChoice(): WeaponEnum {
    return this.appService.getRandomWeapon();
  }
}
