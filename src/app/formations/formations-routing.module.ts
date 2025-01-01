import { Routes } from '@angular/router';
import { FormationsComponent } from './formations.component';
import { DetailsInformatiqueComponent } from './details-informatique/details-informatique.component';
import { DetailsMecaniqueComponent } from './details-mecanique/details-mecanique.component';
import { DetailsElectriqueComponent } from './details-electrique/details-electrique.component';
import { DetailsGestionComponent } from './details-gestion/details-gestion.component';
import { DetailsEconomieComponent } from './details-economie/details-economie.component';
import { DetailsTechniqueComponent } from './details-technique/details-technique.component';
import { InsecoComponent } from './inseco/inseco.component';

export const froutes: Routes = [
  { path: '', component: FormationsComponent },
  { path: 'details-informatique', component: DetailsInformatiqueComponent },
  { path: 'details-mecanique', component: DetailsMecaniqueComponent },
  { path: 'details-electrique', component: DetailsElectriqueComponent },
  { path: 'details-gestion', component: DetailsGestionComponent },
  { path: 'details-economie', component: DetailsEconomieComponent },
  { path: 'details-technique', component: DetailsTechniqueComponent },
  { path: 'inseco', component: InsecoComponent },
];
