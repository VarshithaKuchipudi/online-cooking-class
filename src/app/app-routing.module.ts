import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeSubmitComponent } from './components/recipe-submit/recipe-submit.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'submit', component: RecipeSubmitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }