import { Component } from "@angular/core";

import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: "app-lost",
  imports: [HeroComponent],
  templateUrl: "./lost.component.html",
  styleUrl: "./lost.component.css",
})
export class LostComponent {}
