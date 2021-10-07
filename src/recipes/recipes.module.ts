import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';

@Module({
  providers: [RecipesResolver, RecipesService],
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema/recipe.gql',
      // debug: true,
      // playground: true,
    }),
  ],
})
export class RecipesModule {}
