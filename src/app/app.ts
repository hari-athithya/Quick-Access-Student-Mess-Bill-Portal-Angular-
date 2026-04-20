import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MESS_DATA } from './mess-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  searchTerm: string = '';
  results: any[] = [];

  search() {
    this.results = MESS_DATA.filter(record => 
      record.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
