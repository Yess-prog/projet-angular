import { Injectable } from '@angular/core';
import { candidat } from '../model/candidat';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidatService {
  private candidates: candidat[] = [
    {
      id: 1, nom: 'Werghmi', prenom: 'Ahmed', email: 'Ahmed.We@gmail.com',
      cin: 1000000,
      mdp: 'werGhmi12',
      photo: undefined
    },
    {
      id: 2, nom: 'Boufaden', prenom: 'Hanen', email: 'Hanen.B@yahoo.fr',
      cin:11110000,
      mdp: 'BH15624*',
      photo: undefined
    },
    {
      id: 3, nom: 'Ben aissa', prenom: 'Rayen', email: 'R.Ba@hotmail.fr',
      cin: 50154864,
      mdp: 'BaRss',
      photo: undefined
    },
    {
      id: 4, nom: 'Ismail', prenom: 'Marwa', email: 'Marwa.Iss@gmail.com',
      cin: 26513210,
      mdp: 'marwaXE12',
      photo: undefined
    },
    {
      id: 5, nom: 'Rezgui', prenom: 'Imed', email: 'Imed.R@yahoo.fr',
      cin: 14567895,
      mdp: 'imed010203',
      photo: undefined
    },
  ];

  private candidatesSubject = new BehaviorSubject<candidat[]>(this.candidates);
  constructor() {
    
    this.loadPhotos();
  }

  private async loadPhotos() {
    const photoPaths = [
      'assets/candidatImg/c2.jpeg',
      'assets/candidatImg/c3.jpeg',
      'assets/candidatImg/c4.jpeg',
      'assets/candidatImg/candidat.jpeg',
      'assets/candidatImg/candidat.jpeg',

    ];

    for (let i = 0; i < this.candidates.length; i++) {
      const path = photoPaths[i];
      if (path) {
        this.candidates[i].photo = await this.loadImageData(path);
      }
    }

    this.candidatesSubject.next([...this.candidates]);
  }


  private loadImageData(path: string): Promise<ImageData> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          resolve(ctx.getImageData(0, 0, canvas.width, canvas.height));
        } else {
          reject(new Error('Canvas context is null'));
        }
      };
      img.onerror = () => reject(new Error('Failed to load image: ' + path));
    });
  }

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
