import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ShopsModule } from './shops/shops.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ShopsModule, CategoriesModule, ProductsModule],
})
export class AppModule {}
