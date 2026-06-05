import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('angular-app');
  
  wordText = '';
  //^creates a variable starting as an exmpty string

  palindromes: string[] = [];
  //holds paindromes from uploaded csv

  getWords(): string [] {

    return this.wordText
    .split(/\r?\n/)
    .map(word => word.trim())
    .filter(word => word.length > 0);
  }
  //^returns words as a list of strings
  

  downloadWords(): void {
let words = this.getWords();

if (words.length === 0 ) {
  alert('Enter at least one word')
  return;
}
//turns list into text
let csvText = words.join('\n')
//makes temp file in browser
let file = new Blob([csvText], { type: 'text/csv'});
//makes download link
let url = window.URL.createObjectURL(file);
let link = document.createElement('a');

link.href = url;
link.download = 'word_list.csv';

link.click();

window.URL.revokeObjectURL(url);
 }

uploadPalindromes(event: Event): void{
  let input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0){
    return;
  }

  let file = input.files[0];
  let reader = new FileReader();

  reader.onload = () => {
    let text = reader.result as string;

    this.palindromes = text
     .split(/\r?\n/)
     .map(line => line.trim())
     .filter(line => line.length > 0);
  };

  reader.readAsText(file);


}
}
