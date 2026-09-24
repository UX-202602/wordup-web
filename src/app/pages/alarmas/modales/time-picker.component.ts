import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-time-picker',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatDialogModule, MatIconModule],
  template: `
    <div class="picker">
      <p class="label-medium picker__title">Enter time</p>
      <div class="picker__inputs">
        <div class="picker__field">
          <input type="number" [(ngModel)]="hour" min="0" max="23" class="picker__input display" />
          <span class="label-small">Hour</span>
        </div>
        <span class="picker__colon headline-large">:</span>
        <div class="picker__field">
          <input type="number" [(ngModel)]="minute" min="0" max="59" class="picker__input display" />
          <span class="label-small">Minute</span>
        </div>
      </div>
      <div class="picker__actions">
  <mat-icon class="picker__clock">schedule</mat-icon>
  <div class="picker__buttons">
    <button mat-button (click)="cancel()">Cancel</button>
    <button mat-button (click)="confirm()">OK</button>
  </div>
</div>
    </div>
  `,
  styles: [`
  .picker {
    background-color: var(--color-secondary);
    padding: 24px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 280px;
  }

  .picker__title { color: var(--color-white); }

  .picker__inputs {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }

  .picker__field {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: var(--color-white);
  }

  .picker__input {
    width: 96px;
    height: 80px;
    background: var(--color-white);
    border: none;
    border-radius: 8px;
    text-align: center;
    font-size: 48px;
    font-weight: 800;
    font-family: var(--font-family);
    outline: none;
    color: var(--color-black);
  }

  .picker__colon {
    color: var(--color-white);
    margin-bottom: 20px;
  }

  .picker__actions {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .picker__clock {
    color: var(--color-white);
    margin-right: auto;
  }

  .picker__buttons {
    display: flex;
    gap: 8px;
  }

  button { color: var(--color-white) !important; }
`]
})
export class TimePickerComponent {
  hour: number;
  minute: number;

  constructor(
    public dialogRef: MatDialogRef<TimePickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    const parts = (data.time || '09:00').split(':');
    this.hour = parseInt(parts[0]);
    this.minute = parseInt(parts[1]);
  }

  cancel() { this.dialogRef.close(); }
  confirm() {
    const h = this.hour.toString().padStart(2, '0');
    const m = this.minute.toString().padStart(2, '0');
    this.dialogRef.close(`${h}:${m}`);
  }
}