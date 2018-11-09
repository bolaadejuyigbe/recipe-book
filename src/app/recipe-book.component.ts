import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { HeaderComponent } from './header.component';
//import { RecipesComponent } from './recipes/recipes.component';
//import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeService } from './recipes/recipe.service';


@Component({
  moduleId:module.id,
  selector: 'rb-root',
  templateUrl: './recipe-book.component.html',
  providers: [RecipeService]
})
export class RecipeBookAppComponent {
}
