import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-ingredient",
  imports: [CommonModule],
  templateUrl: "./ingredient.component.html",
  styleUrl: "./ingredient.component.css",
})
export class IngredientComponent {
  ingredient = input.required<any>();
}
