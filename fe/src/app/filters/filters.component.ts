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

  @ViewChild('startModal', { static: false }) startModal?: IonModal;
  @ViewChild('endModal', { static: false }) endModal?: IonModal;

  onDateChange(event: CustomEvent, type: 'start' | 'end'): void {
  
    const value = event.detail?.value;
    const formattedDate = value ? value.split('T')[0] : ''; 

    const datePayload = type === 'start' ? { startDate: formattedDate } : { endDate: formattedDate };
    this.dateChange.emit(datePayload);

    const modal = type === 'start' ? this.startModal : this.endModal;
    modal?.dismiss();
  }
}
