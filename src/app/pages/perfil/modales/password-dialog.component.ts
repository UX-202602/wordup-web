import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-password-dialog',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatDialogModule, MatIconModule],
  template: `
    <div class="dialog">
      <p class="title-large dialog__title">Cambiar contraseña</p>

      <input class="dialog__input" type="password" placeholder="Contraseña actual" [(ngModel)]="current" />
      <input class="dialog__input" type="password" placeholder="Nueva contraseña" [(ngModel)]="next" />
      <input class="dialog__input" type="password" placeholder="Confirmar nueva contraseña" [(ngModel)]="confirmation" />

      @if (error) {
      <p class="label-small dialog__error">{{ error }}</p>
      }

      <div class="dialog__actions">
        <button mat-flat-button class="btn-cancel label-large" (click)="cancel()">
          <mat-icon>close</mat-icon> Cancelar
        </button>
        <button mat-flat-button class="btn-confirm label-large" (click)="confirm()">
          <mat-icon>check</mat-icon> Guardar
        </button>
      </div>
    </div>
  `,
  styles: [`
  .dialog {
    padding: 24px;
    background-color: var(--color-primary);
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 400px;
    max-width: 100%;
    text-align: center;
  }

  .dialog__title {
    color: var(--color-white);
  }

  .dialog__input {
    border: none;
    border-radius: 12px;
    padding: 12px 16px;
    font-family: inherit;
    font-size: 16px;
    outline: none;
  }

  .dialog__error {
    color: var(--color-white);
    background-color: var(--color-error);
    border-radius: 8px;
    padding: 8px;
    line-height: 16px !important;
  }

  .dialog__actions {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 8px;
  }

  .btn-cancel {
    background-color: var(--color-white) !important;
    color: var(--color-error) !important;
    border-radius: 12px !important;
  }

  .btn-confirm {
    background-color: var(--color-secondary) !important;
    color: var(--color-white) !important;
    border-radius: 12px !important;
  }
  `]
})
export class PasswordDialogComponent {
  current = '';
  next = '';
  confirmation = '';
  error = '';

  constructor(public dialogRef: MatDialogRef<PasswordDialogComponent>) { }

  cancel() { this.dialogRef.close(); }

  confirm() {
    if (!this.current || !this.next) {
      this.error = 'Completa todos los campos.';
    } else if (this.next.length < 8) {
      this.error = 'La nueva contraseña debe tener al menos 8 caracteres.';
    } else if (this.next !== this.confirmation) {
      this.error = 'Las contraseñas no coinciden.';
    } else {
      this.dialogRef.close(true);
    }
  }
}
