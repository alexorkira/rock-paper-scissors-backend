import { NestFactory } from "@nestjs/core";
import { GameModule } from "./game.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(GameModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    })
  );

  app.enableCors({
    origin: `${process.env.HOST}:${process.env.FRONTEND_PORT}`,
  });

  await app.listen(process.env.BACKEND_PORT);
}
bootstrap();
