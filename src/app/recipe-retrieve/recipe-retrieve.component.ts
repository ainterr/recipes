import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Recipe } from "../types";
import { TagListComponent } from "../tag-list/tag-list.component";
import { IngredientComponent } from "../ingredient/ingredient.component";

@Component({
  selector: "app-recipe-retrieve",
  imports: [TagListComponent, IngredientComponent, CommonModule],
  templateUrl: "./recipe-retrieve.component.html",
  styleUrl: "./recipe-retrieve.component.css",
})
export class RecipeRetrieveComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  recipe: Recipe | null = null;

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.recipe = this.route.snapshot.data["recipe"];
  }
}
