import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import WeaponEnum from "./weapon/weapon.enum";
import { WeaponPack } from "./weapon/weapon-pack.interface";
import { WeaponPackFactory } from "./weapon/factory";
import * as Input from "./dto/input";
import * as Output from "./dto/output";

@Injectable()
export class GameService {
  private readonly weaponPack: WeaponPack;

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
   * Computers fighting each other
   * @return MatchResultDto
   */
  computersFighting(): Output.MatchResultDto {
    // The fight between the Computer begin
    const computerOneWeapon = this.getRandomWeapon();
    const computerTwoWeapon = this.getRandomWeapon();

    const winner = this.discoverTheWinner(computerOneWeapon, computerTwoWeapon);

    return {
      playerOne: { name: "COM2", weapon: computerOneWeapon },
      playerTwo: { name: "COM1", weapon: computerTwoWeapon },
      winner,
    };
  }

  /**
   * Player against Computer
   * @param dto PlayerChoiceInputDto: input dto containing the player move
   * @return MatchResultDto
   */
  readyPlayerOne(dto: Input.PlayerChoiceDto): Output.MatchResultDto {
    const { playerChoice } = dto;

    // Validation of the Player choice. It must be a WeaponEnum value
    if (!Object.values(WeaponEnum).includes(playerChoice)) {
      throw new HttpException(`Not recognized Weapon ${playerChoice}`, HttpStatus.BAD_REQUEST);
    }

    const computerChoice = this.getRandomWeapon();

    const winner = this.discoverTheWinner(playerChoice, computerChoice);

    return {
      playerOne: { name: "P1", weapon: playerChoice },
      playerTwo: { name: "COM", weapon: computerChoice },
      winner,
    };
  }

  discoverTheWinner(playerOneWeapon: WeaponEnum, playerTwoWeapon: WeaponEnum): string {
    // PlayerOne and PlayerTwo have chosen the same Weapon.
    // No winner for this match. It's a draw!
    if (playerOneWeapon === playerTwoWeapon) {
      return "";
    }

    // If the PlayerTwo choice is contained in the strengths list
    // of the Weapon chosen by PlayerOne... Congrats the PlayerOne wins!
    if (this.weaponPack[playerOneWeapon].strengths.includes(playerTwoWeapon)) {
      return "playerOne";
    }

    // The PlayerTwo weapon is stronger than one chosen by the PlayerOne...
    // Sorry, the PlayerOne has been unlucky. Play again!!
    return "playerTwo";
  }
}
