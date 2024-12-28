import { Component } from '@angular/core';
import { FormationsComponent } from '../formations.component';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details-economie',
  standalone: true,
  imports: [NgFor, RouterLink,NgIf],
  templateUrl: './details-economie.component.html',
  styleUrls: ['./details-economie.component.css']
})
export class DetailsEconomieComponent extends FormationsComponent {
  formationD = {
    titre: 'Formation en Économie Avancée',
    description: 'Maîtrisez les concepts avancés de l\'économie appliquée.',
    chargeHoraire: 40,
    sessions: [
      
      { formateur: 'Loujayn Boulaares', dateDebut: '2024-03-10', dateFin: '2024-03-15', participants: super.getParticipants("eco") }
    ],
    maxP: super.getMaxP("eco"),
  };

  override incrementParticipants(session: any): void {
    if (session.participants < !this.formationD.maxP) {
      session.participants++;
      super.incrementParticipants("eco");
    }
  }
}
