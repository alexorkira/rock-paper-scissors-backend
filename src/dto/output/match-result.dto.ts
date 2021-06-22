import { IsNotEmpty, IsOptional } from "class-validator";
import PlayerDto from "./player.dto";

class MatchResultDto {
  @IsNotEmpty()
  playerOne: PlayerDto;

  @IsNotEmpty()
  playerTwo: PlayerDto;

  @IsOptional()
  winner?: string;
}

export default MatchResultDto;
