import { Component, Inject, Input, Output, EventEmitter, Optional } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TimePickerComponent } from './time-picker.component';

@Component({
  selector: 'app-alarm-dialog',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatDialogModule, MatIconModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, TimePickerComponent],
  templateUrl: './alarm-dialog.component.html',
  styleUrl: './alarm-dialog.component.scss'
})
export class AlarmDialogComponent {
  @Input() isInline = false;
  @Input() isEdit = false;
  @Output() onClose = new EventEmitter<boolean>();

  @Input() set alarm(value: any) {
  if (value) {
    const parts = value.schedule.split(' - ');
    this.startTime = parts[0]?.trim() ?? '09:00';
    this.endTime = parts[1]?.trim() ?? '11:35';
    this.count = value.count ?? 1;
    this.selectedDays = value.days ?? [false, false, false, false, false, false, false];
  }
}

  days = ['L', 'M', 'Mi', 'J', 'V', 'S', 'D'];
  selectedDays: boolean[] = [true, false, false, false, false, false, false];
  startTime = '09:00';
  endTime = '11:35';
  count = 1;

  constructor(
    @Optional() public dialogRef: MatDialogRef<AlarmDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {
    if (data?.isEdit) this.isEdit = true;
  }

  increment() { this.count++; }
  decrement() { if (this.count > 1) this.count--; }

  cancel() {
    if (this.isInline) this.onClose.emit(false);
    else this.dialogRef?.close();
  }

  confirm() {
    if (this.isInline) this.onClose.emit(true);
    else this.dialogRef?.close(true);
  }

  openTimePicker(isStart: boolean) {
    const ref = this.dialog.open(TimePickerComponent, {
      data: { time: isStart ? this.startTime : this.endTime }
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        if (isStart) this.startTime = result;
        else this.endTime = result;
      }
    });
  }
}