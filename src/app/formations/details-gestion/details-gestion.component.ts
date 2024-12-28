import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormationsComponent } from '../formations.component';

@Component({
  selector: 'app-details-gestion',
  standalone: true,
  imports:[NgFor,RouterLink,NgIf],
  templateUrl: './details-gestion.component.html',
  styleUrls: ['./details-gestion.component.css']
})
export class DetailsGestionComponent extends FormationsComponent {
  formationD = {
    titre: 'Formation en Gestion Avancée',
    description: 'Approfondissez vos connaissances en gestion des entreprises.',
    chargeHoraire: 40,
    sessions: [
      { formateur: 'Latifa Laarousi', dateDebut: '2024-03-01', dateFin: '2024-03-07' ,participants: super.getParticipants("gest")},
      
    ],
    maxP: super.getMaxP("gest"),
  };
  override incrementParticipants(session: any): void {
    if (session.participants < !this.formationD.maxP) {
      session.participants++;
      super.incrementParticipants("gest");
    }
  }
  
}
