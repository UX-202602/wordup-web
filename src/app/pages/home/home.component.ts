import { Component, inject, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule, MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MatButtonModule, MatCardModule, MatIconModule, NavbarComponent, RouterLink, MatDatepickerModule, MatNativeDateModule, MatDividerModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    private platformId = inject(PLATFORM_ID);
    nivel = 'Intermedio (B1)';
    palabrasAprendidas = 100;
    palabrasNuevas = 10;
    palabrasEsteMes = 50;
    proximaAlarma = '9:00 AM - 11:35 AM → Lunes 24';
    objetivo = 'Aprender vocabulario nuevo';
    selectedDate = new Date();

    isBrowser: boolean = isPlatformBrowser(this.platformId);

    diasActivos = [1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    alarmasAtendidas = 200;
    alarmasPospuestas = 30;

    dateClass: MatCalendarCellClassFunction<Date> = (date) => {
        const day = date.getDate();
        return this.diasActivos.includes(day) ? 'active-day' : '';
    };
}