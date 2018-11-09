import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';



import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';




@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe ('Schnitzel', 'Very tasty', 'https://toriavey.com/images/2011/02/Passover-Chicken-Schnitzel-1.jpg', [
      new Ingredient ('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe ('Summer Salad', 'Okayish', 'https://blog.bedbathandbeyond.com/wp-content/uploads/2014/05/Sicilian-Swordfish1.jpg?x18862', [])
  ];

  constructor(private http: Http, private httpClient : HttpClient) { }
 getRecipes() {
   return this.recipes;
   
 }
 getRecipe(id: number){
   return this.recipes[id];
 }
 deleteRecipe(recipe: Recipe){
   this.recipes.splice(this.recipes.indexOf(recipe), 1);
 }
 addRecipe(recipe: Recipe){
   this.recipes.push(recipe);
 }
 editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
   this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
 }
 storeData(){
   const body = JSON.stringify(this.recipes);
   const headers = new Headers({
     'Content-Type': 'application/json'
   });
   return this.http.put('https://recipenote-298c9.firebaseio.com/recipes.json', body, {headers: headers});
   
 }
 fetchData(){
   return this.httpClient.get('https://recipenote-298c9.firebaseio.com/recipes.json')
   //.map((response: Response) => response.json())
   .subscribe(
     (data: Recipe[]) => {
        this.recipes = data;
        this.recipesChanged.emit(this.recipes);
     }
   );
 }
}
