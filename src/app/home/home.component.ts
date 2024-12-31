import { Component } from "@angular/core";

import { RECIPES } from "../recipes";
import { Database } from "../types";
import { HeroComponent } from "../hero/hero.component";
import { SearchComponent } from "../search/search.component";
import { RecipeListComponent } from "../recipe-list/recipe-list.component";

@Component({
  selector: "app-home",
  imports: [HeroComponent, SearchComponent, RecipeListComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  recipes: Database = RECIPES;
}
