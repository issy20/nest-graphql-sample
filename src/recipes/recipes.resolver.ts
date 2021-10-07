import { Args, Query, Resolver } from '@nestjs/graphql';
import { Recipe } from './models/recipe';
import { RecipesService } from './recipes.service';

@Resolver((of) => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesServise: RecipesService) {}
  @Query((returns) => Recipe)
  async recipe(@Args('id') id: string): Promise<Recipe> {
    return await this.recipesServise.findOneById(id);
  }
}
