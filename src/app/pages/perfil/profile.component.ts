import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { PasswordDialogComponent } from './modales/password-dialog.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatDialogModule, MatIconModule, NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  usuario = 'Saiki';
  nombre = 'Julián Ferro';
  email = 'juliferro@gmail.com';
  photo: string | null = null;

  editing = false;
  message = '';

  constructor(private dialog: MatDialog) { }

  toggleEdit() {
    this.editing = !this.editing;
    this.message = this.editing ? '' : 'Datos actualizados.';
  }

  onPhotoSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => (this.photo = reader.result as string);
    reader.readAsDataURL(file);
  }

  changePassword() {
    this.dialog.open(PasswordDialogComponent).afterClosed().subscribe(result => {
      if (result) this.message = 'Contraseña actualizada.';
    });
  }
}
