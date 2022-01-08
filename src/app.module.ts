import { Module } from '@nestjs/common';
import { UsersModule } from './domain/users/users.module';
import { ShopsModule } from './domain/shops/shops.module';
import { CategoriesModule } from './domain/categories/categories.module';
import { ProductsModule } from './domain/products/products.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    ShopsModule,
    CategoriesModule,
    ProductsModule,
    AuthModule,
  ],
})
export class AppModule {}
