import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { FiltersComponent } from '../filters/filters.component';
import { TransactionListComponent } from '../transaction-list/transaction-list.component'; 
import { DatePickerComponent } from '../date-picker/date-picker.component'; 
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, FiltersComponent, TransactionListComponent, DatePickerComponent]
})
export class HomePageModule {}
