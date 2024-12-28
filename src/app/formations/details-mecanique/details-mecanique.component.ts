import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormationsComponent } from '../formations.component';

@Component({
  selector: 'app-details-mecanique',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink],
  templateUrl: './details-mecanique.component.html',
  styleUrls: ['./details-mecanique.component.css']
})
export class DetailsMecaniqueComponent extends FormationsComponent {
  formationD = {
    titre: 'Formation Mécanique Avancée',
    description: 'Approfondissez vos connaissances en mécanique et génie industriel.',
    chargeHoraire: 40,
    sessions: [
      { formateur: 'Ahmed Landolsi', dateDebut: '2024-01-12', dateFin: '2024-01-20',participants: super.getParticipants("mec") },
     
    ],
    maxP: super.getMaxP("mec"),
  };
  override incrementParticipants(session: any): void {
    if (session.participants < !this.formationD.maxP) {
      session.participants++;
      super.incrementParticipants("mec");
    }
  }
  
}
