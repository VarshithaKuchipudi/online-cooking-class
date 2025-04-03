export interface Recipe {
    id: number;
    title: string;
    ingredients: string; // Could be an array in a more complex version
    instructions: string;
    submittedBy: string;
    createdAt?: string; // Optional timestamp
  }