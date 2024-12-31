import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Tag } from "../types";

@Component({
  selector: "app-tag-list",
  imports: [CommonModule],
  templateUrl: "./tag-list.component.html",
  styleUrl: "./tag-list.component.css",
})
export class TagListComponent {
  tags = input.required<Tag[]>();
}
