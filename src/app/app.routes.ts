import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FormationsComponent } from './formations/formations.component'; 
import { DetailsInformatiqueComponent } from './formations/details-informatique/details-informatique.component';
import { DetailsMecaniqueComponent } from './formations/details-mecanique/details-mecanique.component';
import { DetailsElectriqueComponent } from './formations/details-electrique/details-electrique.component';
import { DetailsGestionComponent } from './formations/details-gestion/details-gestion.component';
import { DetailsEconomieComponent } from './formations/details-economie/details-economie.component';
import { DetailsTechniqueComponent } from './formations/details-technique/details-technique.component';
import { InsecoComponent } from './formations/inseco/inseco.component';
import { AdminSpaceComponent } from './admin-space/admin-space.component';
import { ManageCandidatesComponent } from './admin-space/manage-candidates/manage-candidates.component';
import { AddCandidateComponent } from './admin-space/manage-candidates/add-candidate/add-candidate.component';
import { ModifyCandidateComponent } from './admin-space/manage-candidates/modify-candidate/modify-candidate.component';
import { ManageTrainersComponent } from './admin-space/manage-trainers/manage-trainers.component';
import { AddTrainerComponent } from './admin-space/manage-trainers/add-trainer/add-trainer.component';
import { ModifyTrainerComponent } from './admin-space/manage-trainers/modify-trainer/modify-trainer.component';
import { ManageFormationsComponent } from './admin-space/manage-formations/manage-formations.component';
import { AddFormationComponent } from './admin-space/manage-formations/add-formation/add-formation.component';
import { ModifyFormationComponent } from './admin-space/manage-formations/modify-formation/modify-formation.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'accueil', component: AccueilComponent }, 
    { path: 'formations', component: FormationsComponent },
    { path: 'admin-space', component: AdminSpaceComponent },
    { path: 'details-informatique', component: DetailsInformatiqueComponent },
    { path: 'details-mecanique', component: DetailsMecaniqueComponent },
    { path: 'details-electrique', component: DetailsElectriqueComponent },
    { path: 'details-gestion', component: DetailsGestionComponent },
    { path: 'details-economie', component: DetailsEconomieComponent },
    { path: 'details-technique', component: DetailsTechniqueComponent },
    { path: 'inseco',component:InsecoComponent}, 

    { path: 'admin-space', component: AdminSpaceComponent },

    { path: 'admin-space/manage-candidates', component: ManageCandidatesComponent },
    { path: 'admin-space/manage-candidates/add', component: AddCandidateComponent },
    { path: 'admin-space/manage-candidates/modify/:id', component: ModifyCandidateComponent },
  
    
    { path: 'admin-space/manage-trainers', component: ManageTrainersComponent },
    { path: 'admin-space/manage-trainers/add', component: AddTrainerComponent },
    { path: 'admin-space/manage-trainers/modify/:id', component: ModifyTrainerComponent },
  
    
    { path: 'admin-space/manage-formations', component: ManageFormationsComponent },
    { path: 'admin-space/manage-formations/add', component: AddFormationComponent },
    { path: 'admin-space/manage-formations/modify/:id', component: ModifyFormationComponent },
  
    
    

  ];
  