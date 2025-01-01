import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormationsComponent } from '../formations.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details-informatique',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './details-informatique.component.html',
  styleUrls: ['./details-informatique.component.css']
})
export class DetailsInformatiqueComponent extends FormationsComponent {
  formationD = {
    titre: 'Formation Informatique Avancée',
    description: 'Apprenez les concepts avancés en développement informatique.',
    chargeHoraire: 40,
    sessions: [
      
      { formateur: 'Mariem Bouajaja', dateDebut: '2024-02-05', dateFin: '2024-02-10',participants: super.getParticipants("info") }
    ],
    maxP: super.getMaxP("info"),
  };
  constructor(private router: Router) {
    super();
  }
  override incrementParticipants(session: any): void {
    if (session && session.participants < this.formationD?.maxP) {
      session.participants++;
      this.router.navigate(['/inseco']);
    } else {
      alert('Formation complète. Inscription impossible.');
    }
  }
  
}
