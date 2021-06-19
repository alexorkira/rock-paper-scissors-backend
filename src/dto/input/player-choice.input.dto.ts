import { IsNotEmpty } from "class-validator";
import WeaponEnum from "../../weapon/weapon.enum";

class PlayerChoiceInputDto {
  @IsNotEmpty()
  playerChoice: WeaponEnum;
}

export default PlayerChoiceInputDto;
