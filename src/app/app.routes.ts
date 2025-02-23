import { Routes } from "@angular/router";

import { RECIPES } from "./recipes";
import { HomeComponent } from "./home/home.component";
import { RecipeRetrieveComponent } from "./recipe-retrieve/recipe-retrieve.component";
import { LostComponent } from "./lost/lost.component";

export const routes: Routes = Object.keys(RECIPES).map((slug) => {
  return {
    path: slug,
    component: RecipeRetrieveComponent,
    data: { recipe: RECIPES[slug] },
  };
});

routes.push({
  path: "",
  component: HomeComponent,
});

routes.push({
  path: "**",
  component: LostComponent,
});
