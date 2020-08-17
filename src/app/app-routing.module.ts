import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';

const routes: Routes = [
  { path: '', redirectTo: 'ejercicio1', pathMatch: 'full' },
  { path: 'ejercicio1', component: Ejercicio1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
