import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
  template: `
    <div class="dialog">
      <p class="title-large dialog__title">¿Desea eliminar esta alarma?</p>
      <div class="dialog__actions">
        <button mat-flat-button class="btn-cancel label-large" (click)="cancel()">
          <mat-icon>close</mat-icon> Cancelar
        </button>
        <button mat-flat-button class="btn-confirm label-large" (click)="confirm()">
          <mat-icon>delete_outline</mat-icon> Eliminar
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
    gap: 30px;
    width: 361px;
    height: 192px;
    text-align: center;
  }

  .dialog__title {
    color: var(--color-white);
  }

  .dialog__actions {
    display: flex;
    gap: 12px;
    justify-content: center;
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
export class DeleteDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>) {}
  cancel() { this.dialogRef.close(); }
  confirm() { this.dialogRef.close(true); }
}