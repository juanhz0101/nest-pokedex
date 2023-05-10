import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, //conviertes los valores querystring a su tipo de dato de &limit=10 => string '10' a => number 10
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.setGlobalPrefix('api/v2');

  await app.listen(process.env.PORT);
  console.log(`Application is running on port: ${process.env.PORT}`);
}
bootstrap();
