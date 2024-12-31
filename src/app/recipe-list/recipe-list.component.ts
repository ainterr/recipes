import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

import { TagListComponent } from "../tag-list/tag-list.component";
import { Database } from "../types";

@Component({
  selector: "app-recipe-list",
  imports: [TagListComponent, RouterLink, CommonModule],
  templateUrl: "./recipe-list.component.html",
  styleUrl: "./recipe-list.component.css",
})
export class RecipeListComponent {
  recipes = input.required<Database>();
}
