import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ChampionComponent } from './champion/champion.component';
import { ItemsComponent } from './items/items.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent },
  { path: 'items', component: ItemsComponent},
  { path: 'champion/:name', component: ChampionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }