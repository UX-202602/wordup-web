import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { Word, WORDS } from '../../shared/words';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent {
  words: Word[] = WORDS;
  index = 0;
  flipped = false;

  get current(): Word {
    return this.words[this.index];
  }

  get hasPrevious(): boolean { return this.index > 0; }
  get hasNext(): boolean { return this.index < this.words.length - 1; }

  flip() { this.flipped = !this.flipped; }

  previous() {
    if (!this.hasPrevious) return;
    this.flipped = false;
    this.index--;
  }

  next() {
    if (!this.hasNext) return;
    this.flipped = false;
    this.index++;
  }
}
