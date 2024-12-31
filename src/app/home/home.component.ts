import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Database } from "../types";
import { HeroComponent } from "../hero/hero.component";
import { RecipeListComponent } from "../recipe-list/recipe-list.component";

@Component({
  selector: "app-home",
  imports: [HeroComponent, RecipeListComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  constructor(private httpClient: HttpClient) {}

  recipes: Database = {};

  ngOnInit() {
    this.httpClient.get<Database>("assets/recipes.json").subscribe((data) => {
      this.recipes = data;
    });
  }
}
