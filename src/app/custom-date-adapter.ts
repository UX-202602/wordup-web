import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

@Injectable()
export class MondayFirstDateAdapter extends NativeDateAdapter {
  // 0 = Domingo, 1 = Lunes
  override getFirstDayOfWeek(): number {
    return 1; 
  }
}