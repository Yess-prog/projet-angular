import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormationsComponent } from '../formations.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details-electrique',
  standalone: true,
  imports:[NgFor,NgIf,RouterLink],
  templateUrl: './details-electrique.component.html',
  styleUrls: ['./details-electrique.component.css']
})
export class DetailsElectriqueComponent extends FormationsComponent {
  formationD = {
    titre: 'Formation Électrique Avancée',
    description: 'Maîtrisez les installations électriques complexes et la sécurité.',
    chargeHoraire: 40,
    sessions: [
      
      { formateur: 'Hatem Dhrif', dateDebut: '2024-03-05', dateFin: '2024-03-10' ,participants: super.getParticipants("elec")}
    ],
    maxP: super.getMaxP("elec"),
  };
  override incrementParticipants(session: any): void {
    if (session.participants < !this.formationD.maxP) {
      session.participants++;
      super.incrementParticipants("elec");
    }
  }
  
}
