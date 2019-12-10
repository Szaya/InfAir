import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { UserRole } from '../domain/user-role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  UserRole = UserRole;

  title = 'infari-client';

  constructor (
    public authService: AuthService) {

    }
}
