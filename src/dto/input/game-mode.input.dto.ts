import { IsNotEmpty } from "class-validator";

class GameModeInputDto {
  @IsNotEmpty()
  mode: string;
}

export default GameModeInputDto;
