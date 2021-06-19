import { Body, Controller, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import * as Input from "./dto/input";
import { MatchResultDto } from "./dto/output";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("set-game-mode")
  setGameMode(@Body() dto: Input.GameModeDto): string {
    return this.appService.setGameMode(dto);
  }

  @Post("the-winner-is")
  theWinnerIs(@Body() dto: Input.PlayerChoiceDto): MatchResultDto {
    return this.appService.discoverTheWinner(dto);
  }
}
