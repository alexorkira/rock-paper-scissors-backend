import { IsNotEmpty } from "class-validator";
import WeaponEnum from "../../weapon/weapon.enum";

class PlayerDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  weapon: WeaponEnum;
}

export default PlayerDto;
