import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-submit',
  templateUrl: './recipe-submit.component.html',
  styleUrls: ['./recipe-submit.component.css']
})
export class RecipeSubmitComponent {
  newRecipe: Recipe = { id: 0, title: '', ingredients: '', instructions: '', submittedBy: '' };

  constructor(private recipeService: RecipeService, private router: Router) { }

  submitRecipe(): void {
    this.recipeService.addRecipe(this.newRecipe).subscribe(() => {
      this.router.navigate(['/']); // Redirect to home after submission
    });
  }
}