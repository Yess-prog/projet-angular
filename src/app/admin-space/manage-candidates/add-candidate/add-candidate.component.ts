import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatService } from '../../../services/candidat.service';
import { candidat } from '../../../model/candidat';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css'],
  standalone: true,
  imports: [FormsModule],
  
})



export class AddCandidateComponent {
  
  candidate: candidat = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    cin: 0,
    mdp: '',
    photo: null, 
  };

  constructor(private candidatService: CandidatService, private router: Router) {}

  

  onSubmit(): void {
    if (
      this.candidate.nom &&
      this.candidate.prenom &&
      this.candidate.email &&
      this.candidate.cin &&
      this.candidate.mdp
    ) {
      this.candidatService.addCandidat(this.candidate).subscribe(() => {
        console.log('Candidat Ajouté:', this.candidate);
        this.router.navigate(['/admin-space/manage-candidates']);
      });
    } else {
      console.error('ERR');
    }
  }
  
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.candidate.photo = reader.result as unknown as ImageData;
      };
      reader.readAsDataURL(file);
      
    }

  }

  candiateLength():number{
    return this.candidatService.getCandidats.length;
  }
  
}
