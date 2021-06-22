import { Test, TestingModule } from "@nestjs/testing";
import { HttpStatus, INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { GameModule } from "../src/game.module";
import { MatchResultDto } from "../src/dto/output";

describe("GameController (e2e)", () => {
  let app: INestApplication;
  const winnerCases = ["playerOne", "playerTwo", ""];
  const weaponPack = ["rock", "paper", "scissors"];

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [GameModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("Player vs Computer", async () => {
    await request(app.getHttpServer())
      .post("/player-vs-com")
      .send({ playerChoice: "rock" })
      .expect(HttpStatus.CREATED)
      .expect((res) => {
        const { playerOne, playerTwo, winner } = res.body as MatchResultDto;
        expect(playerOne.name).toBe("P1");
        expect(playerOne.weapon).toBe("rock");
        expect(playerTwo.name).toBe("COM");
        expect(weaponPack.includes(playerTwo.weapon)).toBeTruthy();
        expect(winnerCases.includes(winner)).toBeTruthy();
      });
  });

  it("Computer vs Computer", async () => {
    await request(app.getHttpServer())
      .get("/com-vs-com")
      .expect(HttpStatus.OK)
      .expect((res) => {
        const { playerOne, playerTwo, winner } = res.body as MatchResultDto;
        expect(playerOne.name).toBe("COM2");
        expect(weaponPack.includes(playerOne.weapon)).toBeTruthy();
        expect(playerTwo.name).toBe("COM1");
        expect(weaponPack.includes(playerTwo.weapon)).toBeTruthy();
        expect(winnerCases.includes(winner)).toBeTruthy();
      });
  });
});
