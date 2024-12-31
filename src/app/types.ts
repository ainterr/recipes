export type Slug = string;

export type Tag = string;

export type Ingredient = {
  qnty?: string;
  name: string;
  note?: string;
};

export type Instruction = string;

export type Note = string;

export type IngredientGroup = {
  group: string;
  ingredients: Ingredient[];
};

export type InstructionGroup = {
  group: string;
  instructions: Instruction[];
};

export type NoteGroup = {
  group: string;
  notes: Note[];
};

export type Recipe = {
  title: string;
  source: string;
  tags?: Tag[];
  description?: string;
  ingredients?: (Ingredient | IngredientGroup)[];
  instructions?: (Instruction | InstructionGroup)[];
  notes?: (Note | NoteGroup)[];
  yield?: string;
};

export type Database = { [key: Slug]: Recipe };
