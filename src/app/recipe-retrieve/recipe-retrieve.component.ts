import { Component, input } from "@angular/core";
import { CommonModule, Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

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
    private router: Router,
  ) {}

  recipe: Recipe | null = null;

  ngOnInit() {
    this.recipe = this.route.snapshot.data["recipe"];
  }

  goBack() {
    if (document.referrer) {
      const location = new URL(document.location.href);
      const referrer = new URL(document.referrer);

      if (location.hostname === referrer.hostname) {
        this.location.back();
        return;
      }
    }

    this.router.navigate(["/"]);
  }
}
