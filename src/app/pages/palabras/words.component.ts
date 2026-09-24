import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { Word, WORDS } from '../../shared/words';
import { WordDetailComponent } from './word-detail.component';

@Component({
  selector: 'app-words',
  standalone: true,
  imports: [MatButtonModule, RouterLink, NavbarComponent, WordDetailComponent],
  templateUrl: './words.component.html',
  styleUrl: './words.component.scss'
})
export class WordsComponent {
  words: Word[] = WORDS;
  selected: Word | null = null;

  select(word: Word) {
    this.selected = this.selected === word ? null : word;
  }
}
