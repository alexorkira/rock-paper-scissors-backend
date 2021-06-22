import { Test, TestingModule } from "@nestjs/testing";
import { GameController } from "./game.controller";
import { GameService } from "./game.service";
import WeaponEnum from "./weapon/weapon.enum";

describe("The Game Controller", () => {
  let gameController: GameController;
  let gameService: GameService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GameController],
      providers: [GameService],
    }).compile();

    gameController = app.get<GameController>(GameController);
    gameService = app.get<GameService>(GameService);
  });

  describe("PlayerOne is playing", () => {
    it("PlayerOne wins playing Rock", () => {
      jest.spyOn(gameService, "getRandomWeapon").mockImplementation(() => {
        return WeaponEnum.SCISSORS;
      });

      const mockPlayerChoiceInput = {
        playerChoice: WeaponEnum.ROCK,
      };
      const result = gameController.readyPlayerOne(mockPlayerChoiceInput);
      expect(result.playerTwo.weapon).toEqual("scissors");
      expect(result.winner).toEqual("playerOne");
    });
  });

  describe("Computer is playing alone", () => {
    it("COM1 playing Paper wins against COM2", () => {
      // Mock the floor method of Math library to get the Computer choices
      const rockIndex = 0;
      const paperIndex = 1;
      jest.spyOn(Math, "floor").mockReturnValueOnce(paperIndex).mockReturnValue(rockIndex);

      const result = gameController.computersFighting();
      expect(result.playerOne.weapon).toEqual("paper");
      expect(result.playerTwo.weapon).toEqual("rock");
      expect(result.winner).toEqual("playerOne");
    });
  });
});
