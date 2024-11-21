import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  @Input() label: string = '';
  @Input() date: string = '';
  @Output() datePickerChange: EventEmitter<any> = new EventEmitter();
  
  datetimeId: string = `datetime-${Math.random().toString(36).substr(2, 9)}`; 
  isOpen: boolean = false; 

  onDateChange(event: any) {
    this.datePickerChange.emit(event);
    this.isOpen = false;
  }

  openModal() {
    this.isOpen = true; 
  }
}
