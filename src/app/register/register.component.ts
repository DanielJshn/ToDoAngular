import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  registerCheck() {
    if (!this.email || !this.password) {
      this.errorMessage = '⚠️ Please fill in all fields!';
      return;
    }
  
    this.authService.register({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        console.log('✅ Registration successful:', response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('❌ Registration error:', error);
        this.errorMessage = error.error?.message || '⚠️ An unknown error occurred!';
      }
    });
  }
}
