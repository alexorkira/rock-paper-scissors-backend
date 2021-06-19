import { IsNotEmpty } from "class-validator";

class GameModeInputDto {
  @IsNotEmpty()
  mode: "1P" | "COM2";
}

export default GameModeInputDto;
