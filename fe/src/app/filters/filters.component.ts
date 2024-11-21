import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {

  startDate: string = '2024-10-01';
  endDate: string = '2024-11-30';
  
  @Output() dateChange = new EventEmitter<{ startDate?: string, endDate?: string }>();

  onDateChange(event: CustomEvent, type: 'start' | 'end'): void {
    const value = event.detail?.value;
    const formattedDate = value ? value.split('T')[0] : ''; 

    const datePayload = type === 'start' ? { startDate: formattedDate } : { endDate: formattedDate };
    this.dateChange.emit(datePayload);
  }
}
