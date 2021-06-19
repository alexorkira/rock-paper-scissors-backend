import { Injectable } from "@nestjs/common";
import WeaponEnum from "./weapon/weapon.enum";
import Weapon from "./weapon/weapon";
import { WeaponFactory, WeaponSuite, WeaponSuiteFactory } from "./weapon/weapon.factory";
import GameModeInputDto from "./dto/input/game-mode.input.dto";
import MatchResultDto from "./dto/output/match-result.dto";
import PlayerMoveDto from "./dto/input/player-move.input.dto";

@Injectable()
export class AppService {
  private readonly weapons: WeaponSuite;
  private mode: string;

  private computerChoice;

  constructor() {
    this.weapons = WeaponSuiteFactory.createWeaponSuite();
  }

  /**
   * Returns a random choice between the all Weapons set up
   */
  getRandomWeapon(): WeaponEnum {
    const allWeapons = Object.values(this.weapons);
    const randomWeapon = allWeapons[Math.floor(Math.random() * allWeapons.length)];
    return randomWeapon.name;
  }

  /**
   * Set the mode of the match. P1 vs COM || COM vs COM
   * @param dto: input dto containing the game mode
   */
  setGameMode(dto: GameModeInputDto): string {
    this.mode = dto.mode;

    // // If the user select Player VS Computer
    // if (this.mode === "1player") {
    //   this.computerChoice = this.getRandomWeapon();
    // }

    return "ok";
  }

  /**
   * Discover who is the winner of the match
   * @param dto: input dto containing the player move
   */
  discoverTheWinner(dto: PlayerMoveDto): MatchResultDto {
    const { playerMove } = dto;

    const computerMove = this.getRandomWeapon();

    if (playerMove === computerMove) {
      return { playerMove, computerMove };
    }

    if (this.weapons[playerMove].weaknesses.find((weaponName) => weaponName == computerMove)) {
      return {
        playerMove,
        computerMove,
        winner: "computer",
      };
    }

    return {
      playerMove,
      computerMove,
      winner: "you!!",
    };
  }
}
