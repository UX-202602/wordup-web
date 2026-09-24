import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { AlarmDialogComponent } from './modales/alarm-dialog.component';
import { DeleteDialogComponent } from './modales/delete-dialog.component';

interface Alarm {
  day: string;
  schedule: string;
  enabled: boolean;
  count: number;
  days: boolean[];
}


@Component({
  selector: 'app-alarms',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDialogModule,
    NavbarComponent,
    AlarmDialogComponent,
  ],
  templateUrl: './alarms.component.html',
  styleUrl: './alarms.component.scss'
})
export class AlarmsComponent {
  alarms: Alarm[] = [
  { day: 'Lunes', schedule: '9:00 AM - 11:35 AM', enabled: true, count: 2, days: [true, false, false, false, false, false, false] },
  { day: 'Jueves', schedule: '10:45 AM - 18:00 PM', enabled: true, count: 1, days: [false, false, false, true, false, false, false] },
  { day: 'Viernes', schedule: '15:00 PM - 18:00 PM', enabled: true, count: 1, days: [false, false, false, false, true, false, false] },
];

  showForm = false;
  isEdit = false;
  selectedIndex = -1;

  constructor(private dialog: MatDialog) { }

  deleteAlarm(index: number) {
    this.alarms.splice(index, 1);
  }

  openDelete(index: number) {
    const ref = this.dialog.open(DeleteDialogComponent);
    ref.afterClosed().subscribe(result => {
      if (result) this.deleteAlarm(index);
    });
  }

  openCreate() {
    this.isEdit = false;
    this.showForm = true;
  }

  openEdit(index: number) {
    this.isEdit = true;
    this.selectedIndex = index;
    this.showForm = true;
  }

  closeForm() { this.showForm = false; }
}