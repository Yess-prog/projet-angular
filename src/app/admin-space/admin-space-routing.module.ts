import { Routes } from '@angular/router';
import { AdminSpaceComponent } from './admin-space.component';
import { ManageCandidatesComponent } from './manage-candidates/manage-candidates.component';
import { AddCandidateComponent } from './manage-candidates/add-candidate/add-candidate.component';
import { ModifyCandidateComponent } from './manage-candidates/modify-candidate/modify-candidate.component';
import { ManageTrainersComponent } from './manage-trainers/manage-trainers.component';
import { AddTrainerComponent } from './manage-trainers/add-trainer/add-trainer.component';
import { ModifyTrainerComponent } from './manage-trainers/modify-trainer/modify-trainer.component';
import { ManageFormationsComponent } from './manage-formations/manage-formations.component';
import { AddFormationComponent } from './manage-formations/add-formation/add-formation.component';
import { ModifyFormationComponent } from './manage-formations/modify-formation/modify-formation.component';

export const aroutes: Routes = [
  { path: '', component: AdminSpaceComponent },
  { path: 'manage-candidates', component: ManageCandidatesComponent },
  { path: 'manage-candidates/add', component: AddCandidateComponent },
  { path: 'manage-candidates/modify/:id', component: ModifyCandidateComponent },
  { path: 'manage-trainers', component: ManageTrainersComponent },
  { path: 'manage-trainers/add', component: AddTrainerComponent },
  { path: 'manage-trainers/modify/:id', component: ModifyTrainerComponent },
  { path: 'manage-formations', component: ManageFormationsComponent },
  { path: 'manage-formations/add', component: AddFormationComponent },
  { path: 'manage-formations/modify/:id', component: ModifyFormationComponent },
];
