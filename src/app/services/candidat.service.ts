import { Injectable } from '@angular/core';
import { candidat } from '../model/candidat';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidatService {
  private candidates: candidat[] = [
    { id: 1, nom: 'Werghmi', prenom: 'Ahmed', email: 'Ahmed.We@gmail.com' },
    { id: 2, nom: 'Boufaden', prenom: 'Hanen', email: 'Hanen.B@yahoo.fr' },
    { id: 3, nom: 'Ben aissa', prenom: 'Rayen', email: 'R.Ba@hotmail.fr' },
    { id: 4, nom: 'Ismail', prenom: 'Marwa', email: 'Marwa.Iss@gmail.com' },
    { id: 5, nom: 'Rezgui', prenom: 'Imed', email: 'Imed.R@yahoo.fr' },
  ];

  private candidatesSubject = new BehaviorSubject<candidat[]>(this.candidates);

  getCandidates(): Observable<candidat[]> {
    return this.candidatesSubject.asObservable();
  }

  getCandidateById(id: number): candidat | undefined {
    return this.candidates.find((candidate) => candidate.id === id);
  }

  updateCandidate(id: number, updatedCandidate: candidat): void {
    const index = this.candidates.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.candidates[index] = updatedCandidate;
      this.candidatesSubject.next([...this.candidates]); 
    } else {
      console.error('Candidate not found with ID:', id);
    }
  }

  addCandidate(candidate: candidat): Observable<candidat> {
    this.candidates.push(candidate);
    this.candidatesSubject.next([...this.candidates]); 
    return of(candidate);
  }

  deleteCandidate(id: number): Observable<void> {
    const index = this.candidates.findIndex((candidate) => candidate.id === id);
    if (index !== -1) {
      this.candidates.splice(index, 1); 
      this.candidatesSubject.next([...this.candidates]); 
      return of(void 0); 
    } else {
      console.error('Candidate not found with ID:', id);
      return of(void 0); 
    }
  }
}
