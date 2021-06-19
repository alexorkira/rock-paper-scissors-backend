import { IsNotEmpty, IsOptional } from "class-validator";
import WeaponEnum from "../../weapon/weapon.enum";

class MatchResultDto {
  @IsNotEmpty()
  playerMove: WeaponEnum;

  @IsNotEmpty()
  computerMove: WeaponEnum;

  @IsOptional()
  winner?: string;
}

export default MatchResultDto;
