import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from '../../../services/formation.service';
import { Formation } from '../../../model/formation';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css'],
  imports:[FormsModule]
})
export class AddFormationComponent {
  formation: Formation = {
    id: 0,
    titre: '',
    description: '',
    chargeHoraire: 0,
  };

  constructor(private formationService: FormationService, private router: Router) {}

  onSubmit(): void {
    if (this.formation.titre && this.formation.description && this.formation.chargeHoraire > 0) {
      this.formationService.addFormation(this.formation).subscribe(() => {
        console.log('Formation added');
        this.router.navigate(['/admin-space/manage-formations']);
      });
    } else {
      console.error('Please fill out all required fields.');
    }
  }
 
}
