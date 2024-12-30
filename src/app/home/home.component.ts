import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: "app-home",
  imports: [HeroComponent, CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  constructor(private httpClient: HttpClient) {}

  recipes = {};

  ngOnInit() {
    this.httpClient.get("assets/recipes.json").subscribe((data) => {
      this.recipes = data;
    });
  }
}
