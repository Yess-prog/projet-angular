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
    id: null,
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
    const candidateId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchCandidateDetails(candidateId);
  }

  fetchCandidateDetails(id: number): void {
    const candidate = this.candidatService.getCandidateById(id);
    if (candidate) {
      this.candidat = candidate;
    }
  }

  onSubmit(): void {
    if (this.candidat.id !== null) {
      this.candidatService.updateCandidate(this.candidat.id, this.candidat);
      this.router.navigate(['/admin-space/manage-candidates']);
    }
  }
}
