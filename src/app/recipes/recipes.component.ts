import { Component} from '@angular/core';
import {Router} from  "@angular/router"
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
//import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { Recipe } from './recipe';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent{
}
