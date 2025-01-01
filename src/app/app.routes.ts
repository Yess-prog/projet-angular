import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { InsecoComponent } from './formations/inseco/inseco.component';
export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  {
    path: 'formations',
    loadChildren: () => import('./formations/formations-routing.module').then(m => m.froutes),
  },
  {
    path: 'admin-space',
    loadChildren: () => import('./admin-space/admin-space-routing.module').then(m => m.aroutes),
  },
  {path:'inseco',component:InsecoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
