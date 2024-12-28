import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormationsComponent } from '../formations.component';

@Component({
  selector: 'app-details-technique',
  standalone: true,
  imports:[NgFor,NgIf,RouterLink],
  templateUrl: './details-technique.component.html',
  styleUrls: ['./details-technique.component.css']
})
export class DetailsTechniqueComponent extends FormationsComponent {
  formationD = {
    titre: 'Formation Technique Avancée',
    description: 'Apprenez des compétences techniques approfondies pour l\'industrie.',
    chargeHoraire: 40,
    sessions: [
      { formateur: 'Ismail Hattab', dateDebut: '2024-01-05', dateFin: '2024-01-12' ,participants: super.getParticipants("tech")},
     
    ], maxP: super.getMaxP("mec"),
  };
  override incrementParticipants(session: any): void {
    if (session.participants < !this.formationD.maxP) {
      session.participants++;
      super.incrementParticipants("mec");
    }
  }
  
  
}
