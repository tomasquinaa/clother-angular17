import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  onSearch() {
    console.log('Testando...');
    this.search.emit(this.text);
  }

  text = '';
  inputChange(event: any) {
    console.log('input change called', event.target.value);
    this.text = event.target.value;
  }

  onTyping(event: any) {
    console.log('onTyping called', event.target.value);
  }
}
