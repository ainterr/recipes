import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RecipeRetrieveComponent } from "./recipe-retrieve.component";

describe("RecipeRetrieveComponent", () => {
  let component: RecipeRetrieveComponent;
  let fixture: ComponentFixture<RecipeRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeRetrieveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
