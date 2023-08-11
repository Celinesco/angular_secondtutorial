import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { paths } from './paths';

const routes: Routes = [
  { path: paths.heroesList, component: HeroesComponent },
]; /*Supongo que cada ruta, se escribe como un objeto.  tengo que leer sobre rutas anidadas, rutas con segmentos iguales e*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
