export interface Category {
  id: number;
  name: string;
}

export interface Card {
  id: number;
  categoryId: number;
  term: string;
  definition: string;
}
