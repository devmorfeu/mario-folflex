import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NossoJogoComponent } from "./pages/nosso-jogo/nosso-jogo.component";
import { FaseUmComponent } from "./components/fases/fase-um/fase-um.component";
import { FaseDoisComponent } from "./components/fases/fase-dois/fase-dois.component";
import { FaseTresComponent } from "./components/fases/fase-tres/fase-tres.component";
import { FaseQuatroComponent } from "./components/fases/fase-quatro/fase-quatro.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'nosso-jogo',
    component: NossoJogoComponent
  },
  {
    path: 'nosso-jogo/fase-um',
    component: FaseUmComponent
  },
  {
    path: 'nosso-jogo/fase-dois',
    component: FaseDoisComponent
  },
  {
    path: 'nosso-jogo/fase-tres',
    component: FaseTresComponent
  },
  {
    path: 'nosso-jogo/fase-quatro',
    component: FaseQuatroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
