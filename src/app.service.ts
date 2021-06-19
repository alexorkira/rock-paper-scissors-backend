import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import WeaponEnum from "./weapon/weapon.enum";
import { WeaponPack } from "./weapon/weapon-pack.interface";
import { WeaponPackFactory } from "./weapon/factory";
import * as Input from "./dto/input";
import * as Output from "./dto/output";

@Injectable()
export class AppService {
  private readonly weaponPack: WeaponPack;
  private mode: string;

  constructor() {
    this.weaponPack = WeaponPackFactory.createWeaponPack();
  }

  /**
   * Return a random Weapon name from all Weapons available
   * @return WeaponEnum
   */
  getRandomWeapon(): WeaponEnum {
    // Extract all the Weapons from the the Weapon Pack
    const allWeapons = Object.values(this.weaponPack);
    // A random Weapon from all those available is drawn
    const randomWeapon = allWeapons[Math.floor(Math.random() * allWeapons.length)];
    return randomWeapon.name;
  }

  /**
   * Set the mode of the match. P1 vs COM || COM vs COM
   * @param dto: input dto containing the game mode
   */
  setGameMode(dto: Input.GameModeDto): string {
    this.mode = dto.mode;

    // // If the user select Player VS Computer
    // if (this.mode === "1player") {
    //   this.computerChoice = this.getRandomWeapon();
    // }

    return "ok";
  }

  /**
   * Discover who is the winner of this match
   * @param dto PlayerChoiceInputDto: input dto containing the player move
   * @return MatchResultDto
   */
  discoverTheWinner(dto: Input.PlayerChoiceDto): Output.MatchResultDto {
    const { playerChoice } = dto;

    // Validation of the Player choice. It must be a WeaponEnum value
    if (!Object.values(WeaponEnum).includes(playerChoice)) {
      throw new HttpException("Not recognized Weapon", HttpStatus.BAD_REQUEST);
    }

    const computerChoice = this.getRandomWeapon();

    // Player and Computer have chosen the same Weapon.
    // No winner for this match. It's a draw!
    if (playerChoice === computerChoice) {
      return { playerChoice, computerChoice };
    }

    // If the Computer choice is contained in the strengths list
    // of the Weapon chosen by the Player... Congrats the Player wins!
    if (
      this.weaponPack[playerChoice].strengths.find(
        (strengthWeapon: WeaponEnum) => strengthWeapon == computerChoice
      )
    ) {
      return {
        playerChoice,
        computerChoice,
        winner: "you!!",
      };
    }

    // The Computer weapon is stronger than one chosen by the Player...
    // Sorry, the Player were unlucky. Play again!!
    return {
      playerChoice,
      computerChoice,
      winner: "computer",
    };
  }
}
