import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:5000/api/recipes'; // Replace with your .NET API URL
  private mockRecipes: Recipe[] = [ // Mock data for testing
    { id: 1, title: 'Pancakes', ingredients: 'Flour, eggs, milk', instructions: 'Mix and cook on a skillet.', submittedBy: 'Alice' },
    { id: 2, title: 'Spaghetti', ingredients: 'Pasta, tomato sauce', instructions: 'Boil pasta, add sauce.', submittedBy: 'Bob' }
  ];

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    // Use mock data for now; replace with HTTP call to .NET API
    return of(this.mockRecipes);
    // return this.http.get<Recipe[]>(this.apiUrl);
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    // Mock response; replace with HTTP POST
    recipe.id = this.mockRecipes.length + 1;
    recipe.createdAt = new Date().toISOString();
    this.mockRecipes.push(recipe);
    return of(recipe);
    // return this.http.post<Recipe>(this.apiUrl, recipe);
  }
}