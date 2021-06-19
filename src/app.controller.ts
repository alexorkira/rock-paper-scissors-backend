import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import WeaponEnum from "./weapon/weapon.enum";
import { GameModeInputDto, PlayerMoveDto } from "./dto/input";
import { MatchResultDto } from "./dto/output";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("set-game-mode")
  setGameMode(@Body() dto: GameModeInputDto): string {
    return this.appService.setGameMode(dto);
  }

  @Get()
  getComChoice(): WeaponEnum {
    return this.appService.getRandomWeapon();
  }

  @Post("the-winner-is")
  theWinnerIs(@Body() dto: PlayerMoveDto): MatchResultDto {
    return this.appService.discoverTheWinner(dto);
  }
}
