import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; // Ensure this import is correct
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeSubmitComponent } from './components/recipe-submit/recipe-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // Must be here
    RecipeListComponent,
    RecipeSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }