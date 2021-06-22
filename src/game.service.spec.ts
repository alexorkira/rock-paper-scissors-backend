import { Test, TestingModule } from "@nestjs/testing";
import { GameService } from "./game.service";
import WeaponEnum from "./weapon/weapon.enum";
import { HttpStatus } from "@nestjs/common";

describe("The Game Service", () => {
  let gameService: GameService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [GameService],
    }).compile();

    gameService = app.get<GameService>(GameService);
  });

  it("Should throw an exception if the Player choose a Weapon not provided in the pack", () => {
    const mockSpock = "spock";
    const mockPlayerChoiceInput = {
      playerChoice: mockSpock as WeaponEnum,
    };

    try {
      gameService.readyPlayerOne(mockPlayerChoiceInput);
    } catch (e) {
      expect(e.status).toEqual(HttpStatus.BAD_REQUEST);
      expect(e.message).toEqual(`Not recognized Weapon ${mockSpock}`);
    }
  });

  it("Should return any winner if the Weapons chosen are the same", () => {
    const mockTheSameWeapon = WeaponEnum.SCISSORS;

    const result = gameService.discoverTheWinner(mockTheSameWeapon, mockTheSameWeapon);
    expect(result).toBe("");
  });

  it("Should return playerTwo as winner", () => {
    const mockPlayerOneChoice = WeaponEnum.SCISSORS;
    const mockPlayerTwoChoice = WeaponEnum.ROCK;
    const expectedWinner = "playerTwo";

    const result = gameService.discoverTheWinner(mockPlayerOneChoice, mockPlayerTwoChoice);
    expect(result).toBe(expectedWinner);
  });
});
