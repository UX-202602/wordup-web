import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Word } from '../../shared/words';

@Component({
  selector: 'app-word-detail',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="detail">
      <button class="detail__close" (click)="closed.emit()" aria-label="Cerrar">
        <mat-icon>close</mat-icon>
      </button>

      <h2 class="headline-large detail__word">{{ word.word }}</h2>
      <p class="body-large detail__phonetic">{{ word.phonetic }}</p>

      <p class="title-large detail__section">Significado/meaning:</p>
      <div class="detail__text">
        <p class="body-large">{{ word.meaningEs }}</p>
        <p class="body-large">{{ word.meaningEn }}</p>
      </div>

      <p class="title-large detail__section">Ejemplos de uso</p>
      <div class="detail__text">
        @for (ex of word.examples; track ex.en) {
        <p class="body-large">{{ ex.en }} - {{ ex.es }}</p>
        }
      </div>
    </div>
  `,
  styles: [`
  .detail {
    position: relative;
    width: 100%;
    max-width: 574px;
    padding: 32px 40px 40px;
    background-color: var(--color-secondary);
    color: var(--color-white);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .detail__close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 48px;
    height: 48px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background-color: var(--color-white);
    color: var(--color-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    mat-icon {
      margin: 0;
      width: 24px;
      height: 24px;
      font-size: 24px;
      line-height: 24px;
    }
  }

  .detail__word,
  .detail__phonetic {
    text-align: center;
  }

  .detail__word {
    padding: 0 56px;
  }

  .detail__section {
    margin-top: 16px;
  }

  .detail__text {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding-left: 30px;

    p {
      line-height: 18px !important;
    }
  }
  `]
})
export class WordDetailComponent {
  @Input({ required: true }) word!: Word;
  @Output() closed = new EventEmitter<void>();
}
