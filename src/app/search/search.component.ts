import { Component, model } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Database } from "../types";

@Component({
  selector: "app-search",
  imports: [],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
})
export class SearchComponent {
  recipes = model.required<Database>();
  unfiltered: Database = {};

  filterRecipes(filter: string) {
    this.recipes.update((recipes) => {
      if (Object.keys(this.unfiltered).length == 0) {
        this.unfiltered = { ...recipes };
      }

      let filtered: Database = {};

      Object.keys(this.unfiltered).forEach((slug) => {
        filter = filter.toLowerCase();
        const title = this.unfiltered[slug].title.toLowerCase();
        const tags = (this.unfiltered[slug].tags || []).map((tag) => {
          return tag.toLowerCase();
        });
        if (
          title.includes(filter) ||
          tags.some((element, index, array) => {
            return element.toLowerCase().includes(filter);
          })
        ) {
          filtered[slug] = this.unfiltered[slug];
        }
      });

      return filtered;
    });
  }

  searchUpdate(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;

    this.filterRecipes(value);
  }
}
