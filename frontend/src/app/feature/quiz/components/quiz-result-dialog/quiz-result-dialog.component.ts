import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-result-dialog',
  templateUrl: './quiz-result-dialog.component.html',
  styleUrls: ['./quiz-result-dialog.component.scss'],
})
export class QuizResultDialogComponent implements OnInit {

  items = [
    {
      title: 'Parabéns, Mestre do Quiz!',
      imageUrl: 'assets/image/trophy.gif',
      description: 'Você acertou todas as questões! Incrível desempenho!',
    },
    {
      title: 'Bom Trabalho!',
      imageUrl: 'assets/image/like.gif',
      description: 'Você acertou mais da metade das questões! Continue avançando!',
    },
    {
      title: 'Não Desanime!',
      imageUrl: 'assets/image/sad.gif',
      description: 'Você pode melhorar! Aproveite para revisar e tente novamente.',
    }
  ];

  selectedItem = signal<typeof this.items[0] | null>(null);

  constructor(
    readonly matDialogRef: MatDialogRef<QuizResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) readonly data: { type: 'good-job' | 'good-effort' | 'failure' }
  ) { }

  ngOnInit(): void {
    const choices = {
      'good-job': this.items[0],
      'good-effort': this.items[1],
      'failure': this.items[2]
    };

    this.selectedItem.set(choices[this.data.type] ?? this.items[0]);
  }
}
