import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../../../services/formation.service';
import { Formation } from '../../../model/formation';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modify-formation',
  templateUrl: './modify-formation.component.html',
  styleUrls: ['./modify-formation.component.css'],
  imports : [FormsModule  ]
})
export class ModifyFormationComponent implements OnInit {
  formation: Formation = {
    id: null,
    titre: '',
    description: '',
    chargeHoraire: 0,
  };

  constructor(
    private formationService: FormationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const formationId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchFormationDetails(formationId);
  }

  fetchFormationDetails(id: number): void {
    const formation = this.formationService.getFormationById(id);
    if (formation) {
      this.formation = formation;
    } else {
      console.error('Formation not found');
    }
  }

  onSubmit(): void {
    if (this.formation.id !== null) {
      this.formationService.updateFormation(this.formation.id, this.formation);
      console.log('Formation updated:', this.formation);
      this.router.navigate(['/admin-space/manage-formations']);
    } else {
      console.error('Formation ID is null. Cannot update formation.');
    }
  }
}
