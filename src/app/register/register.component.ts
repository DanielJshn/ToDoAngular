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

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    if (!this.email || !this.password) {
      alert('Заполните все поля!');
      return;
    }

    this.authService.register(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Успешная регистрация:', response);

        localStorage.setItem('token', response.token);
        
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Ошибка регистрации:', error);
      }
    });
  }
}
