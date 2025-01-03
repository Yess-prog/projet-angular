import { Injectable } from '@angular/core';
import { candidat } from '../model/candidat';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidatService {
  private candidats: candidat[] = [
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

  private candidatesSubject = new BehaviorSubject<candidat[]>(this.candidats);
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

    for (let i = 0; i < this.candidats.length; i++) {
      const path = photoPaths[i];
      if (path) {
        this.candidats[i].photo = await this.loadImageData(path);
      }
    }

    this.candidatesSubject.next([...this.candidats]);
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

  getCandidats(): Observable<candidat[]> {
    return this.candidatesSubject.asObservable();
  }

  getCandidatById(id: number): candidat | undefined {
    return this.candidats.find((candidate) => candidate.id === id);
  }

  updateCandidat(id: number, updatedCandidate: candidat): void {
    const index = this.candidats.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.candidats[index] = updatedCandidate;
      this.candidatesSubject.next([...this.candidats]); 
    } else {
      console.error('Candidate not found with ID:', id);
    }
  }

  addCandidat(candidat: candidat): Observable<candidat> {
    
    const maxId = this.candidats.length
      ? Math.max(...this.candidats.map(c => c.id))
      : 0;
    candidat.id = candidat.id || maxId + 1;
  
    this.candidats.push(candidat);
    this.candidatesSubject.next([...this.candidats]);
    return of(candidat);
  }
  

  deleteCandidat(id: number): Observable<void> {
    const index = this.candidats.findIndex((candidate) => candidate.id === id);
    if (index !== -1) {
      this.candidats.splice(index, 1); 
      this.candidatesSubject.next([...this.candidats]); 
      return of(void 0); 
    } else {
      console.error('Candidate not found with ID:', id);
      return of(void 0); 
    }
  }
}
