import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";

import { Recipe } from "../types";
import { TagListComponent } from "../tag-list/tag-list.component";
import { IngredientComponent } from "../ingredient/ingredient.component";

@Component({
  selector: "app-recipe-retrieve",
  imports: [TagListComponent, IngredientComponent, RouterLink, CommonModule],
  templateUrl: "./recipe-retrieve.component.html",
  styleUrl: "./recipe-retrieve.component.css",
})
export class RecipeRetrieveComponent {
  constructor(private route: ActivatedRoute) {}

  recipe: Recipe | null = null;

  ngOnInit() {
    this.recipe = this.route.snapshot.data["recipe"];
  }
}
