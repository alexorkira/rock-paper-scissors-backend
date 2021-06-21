import { IsNotEmpty, IsOptional } from "class-validator";
import WeaponEnum from "../../weapon/weapon.enum";

class MatchResultDto {
  @IsNotEmpty()
  playerOneWeapon: WeaponEnum;

  @IsNotEmpty()
  playerTwoWeapon: WeaponEnum;

  @IsOptional()
  winner?: string;
}

export default MatchResultDto;
