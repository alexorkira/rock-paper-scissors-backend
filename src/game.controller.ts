import { Body, Controller, Get, Post } from "@nestjs/common";
import { GameService } from "./game.service";
import * as Input from "./dto/input";
import { MatchResultDto } from "./dto/output";

@Controller()
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post("player-vs-com")
  readyPlayerOne(@Body() dto: Input.PlayerChoiceDto): MatchResultDto {
    return this.gameService.readyPlayerOne(dto);
  }

  @Get("com-vs-com")
  computersFighting(): MatchResultDto {
    return this.gameService.computersFighting();
  }
}
