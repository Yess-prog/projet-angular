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
  candidates: candidat[] = [];

  constructor(private candidatService: CandidatService) {}

  ngOnInit(): void {
    this.loadCandidates();
  }

  loadCandidates(): void {
    this.candidatService.getCandidates().subscribe((candidates: candidat[]) => {
      this.candidates = candidates;
    });
  }

  deleteCandidate(id: number): void {
    this.candidatService.deleteCandidate(id).subscribe(() => {
     
      this.loadCandidates();
    });
  }
}
