import { Component } from "@angular/core";
import { TITLE, DESCRIPTION } from "../constants";

@Component({
  selector: "app-hero",
  imports: [],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.css",
})
export class HeroComponent {
  title = TITLE;
  description = DESCRIPTION;
}
