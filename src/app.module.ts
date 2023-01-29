import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestingEntity } from './typeorm/entities/testing.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MiddlewaresModule } from './middlewares/middlewares.module';
import { TestMiddleware } from './middlewares/middleware/test.middleware';
import { MiddlewaresController } from './middlewares/middlewares.controller';
import { ExceptionFiltersModule } from './exception-filters/exception-filters.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: 'root',
      database: 'trailhead_leaderboard',
      entities: [TestingEntity],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    MiddlewaresModule,
    ExceptionFiltersModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(TestMiddleware).forRoutes(MiddlewaresController); // this is for controller
    consumer.apply(TestMiddleware).forRoutes({
      path: 'middlewares/test-middleware',
      method: RequestMethod.GET,
    }); // this is for path (routes)
    // throw new Error('Method not implemented.');
  }
}
