import { IsNotEmpty } from "class-validator";
import WeaponEnum from "../../weapon/weapon.enum";

class PlayerMoveInputDto {
  @IsNotEmpty()
  playerMove: WeaponEnum;
}

export default PlayerMoveInputDto;
