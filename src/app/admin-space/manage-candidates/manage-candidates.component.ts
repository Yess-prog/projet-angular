import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../../services/candidat.service';
import { candidat } from '../../model/candidat';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-manage-candidates',
  templateUrl: './manage-candidates.component.html',
  styleUrls: ['./manage-candidates.component.css'],
  imports:[RouterLink,NgIf,NgFor]
})
export class ManageCandidatesComponent implements OnInit {
  candidats: candidat[] = [];

  constructor(private candidatService: CandidatService) {}

  ngOnInit(): void {
    this.loadCandidats();
  }

  loadCandidats(): void {
    this.candidatService.getCandidats().subscribe((candidats: candidat[]) => {
      this.candidats = candidats;
    });
  }

  deleteCandidat(id: number): void {
    this.candidatService.deleteCandidat(id).subscribe(() => {
     
      this.loadCandidats();
    });
  }
}
