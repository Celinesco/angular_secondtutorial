import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { paths } from './paths';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: paths.heroesList, component: HeroesComponent },
  { path: paths.dashboard, component: DashboardComponent },
  {
    path: '',
    redirectTo: paths.dashboard,
    pathMatch: 'full',
  } /**para que redirija automaticamente a dashboard.  */,
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
]; /*Supongo que cada ruta, se escribe como un objeto.  tengo que leer sobre rutas anidadas, rutas con segmentos iguales e*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
