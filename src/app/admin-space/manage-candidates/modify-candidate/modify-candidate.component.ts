import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../../../services/candidat.service';
import { candidat } from '../../../model/candidat';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modify-candidate',
  templateUrl: './modify-candidate.component.html',
  styleUrls: ['./modify-candidate.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class ModifyCandidateComponent implements OnInit {
  candidat: candidat = {
    id: undefined,
    nom: '',
    prenom: '',
    email: '',
    cin: 0,
    mdp: '',
    photo: undefined
  };

  constructor(
    private candidatService: CandidatService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const candidatId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchCandidatDetails(candidatId);
  }

  fetchCandidatDetails(id: number): void {
    const candidati = this.candidatService.getCandidatById(id);
    if (candidati) {
      this.candidat = candidati;
    }
  }

  onSubmit(): void {
    if (this.candidat.id !== null) {
      this.candidatService.updateCandidat(this.candidat.id, this.candidat);
      this.router.navigate(['/admin-space/manage-candidates']);
    }
  }
}
