import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inseco',
  standalone: true,
  templateUrl: './inseco.component.html',
  styleUrls: ['./inseco.component.css'],
  imports: [FormsModule,NgIf,RouterLink]  
})
export class InsecoComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  onSubmit() {
    if (this.firstName && this.lastName && this.email) {
      console.log('Form Submitted', { firstName: this.firstName, lastName: this.lastName, email: this.email });
      
    } else {
      console.log('Form is incomplete');
    }
  }
}
