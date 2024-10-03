import { Component, OnDestroy, signal, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, ViewDidEnter } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { interval, scan, Subscription, tap } from 'rxjs';
import { AppState, selectQuizResultData } from 'src/app/store';
import { setQuizResultData } from 'src/app/store/actions/quiz-result.actions';
import { Question, QuizQuestionComponent } from '../../components/quiz-question/quiz-question.component';
import { QuizResultState } from '../quiz-result/quiz-result.component';

type ReviewState = {
  review: boolean;
  timer: [number, number, number];
  correctQuestionsId: number[];
}

const questions: Question[] = [
    {
        id: 1,
        title: 'Programação',
        content: `
            A expressão Big Data refere-se a um conjunto de técnicas e ferramentas para o armazenamento e
            manipulação de conjuntos de dados muito grandes. Tecnologias tradicionais, como bancos de dados
            relacionais e ferramentas de processamento sequencial, não suportam o vasto volume de dados.
            O Big Data possui quatro características marcantes: volume, variedade, velocidade e veracidade.
        `,
        asking: {
            title: `
                Considerando as informações apresentadas e o conjunto de características marcantes do Big Data,
            avalie as afirmações a seguir
            `,
            body: [
                `
                    I. Em relação ao volume, a quantidade de dados gerados e coletados em diversos tipos de aplicações
                    está aumentando exponencialmente, e as ferramentas de Big Data devem ser capazes de lidar
                    apropriadamente com esse desafio
                `,
                `
                    II. No que diz respeito à variedade, os dados podem ser coletados de diferentes fontes e com
                    diferentes formatos e estruturas e se dividem em dados estruturados, como os dados dos
                    cidadãos; dados semiestruturados, como os dados de sensores; e dados não-estruturados,
                    como os de câmeras de vídeo de segurança.
                `,
                `
                    III. Quanto à velocidade, o processamento de dados deve ocorrer em condições de alta latência,
                    pois eles podem se tornar inúteis, como, por exemplo, dados coletados de sensores de veículos,
                    a análise de redes sociais e as informações sobre o trânsito da cidade.
                `,
                `
                    IV. No que se refere à veracidade, como os dados são coletados de múltiplas fontes, é importante
                    garantir sua qualidade, utilizando fontes confiáveis e consistentes, a fim de evitar erros e
                    comprometer as análises.
                `,
            ],
            footer: 'É correto apenas o que se afirma em',
        },
        alternatives: [
            {
                id: 1,
                label: 'I e IV.'
            },
            {
                id: 2,
                label: 'II e III.',
            },
            {
                id: 3,
                label: 'III e IV.',
            },
            {
                id: 4,
                label: 'I, II e III.',
            },
            {
                id: 5,
                label: 'I, II e IV.',
            }
        ],
        correctId: 1
    },
    {
        id: 2,
        title: 'Gestão',
        content: `
           Um Sistema de Informação Gerencial (SIG) representa um conjunto de recursos dentre os quais é possível
            citar os sistemas: de apoio à decisão, de especialistas, de informação executiva, de gestão de pessoas
            e de gestão de projetos, os quais permitem que a instituição funcione de forma eficiente. Os sistemas
            especialistas são sistemas inteligentes que armazenam e processam o conhecimento adquirido de
            profissionais especializados em uma determinada área do conhecimento.
        `,
        asking: {
            title: `
               Considerando o uso de um componente para um sistema especialista voltado para diagnósticos médicos,
                assinale a opção correta
            `,
        },
        alternatives: [
            {
                id: 1,
                label: `
                    Base de conhecimento é o componente que mantém os axiomas gramaticais e léxicos definidos
                    pelos especialistas.
                `
            },
            {
                id: 2,
                label: `
                    Base de informações estratégicas é o componente que possui as técnicas de navegação nas bases
                    de conhecimento
                `,
            },
            {
                id: 3,
                label: `
                    Base de regras é o componente que traduz todas as informações externas que estejam em interação
                    com o sistema especialista.
                `,
            },
            {
                id: 4,
                label: `
                    Analisador semântico é o componente que obtém e armazena informações sobre diagnósticos por
                    meio de um reconhecimento de regras gramaticais.
                `,
            },
            {
                id: 5,
                label: `
                Motor de inferência é o componente que possui um conjunto de heurísticas adotadas para a resolução
                de problemas na execução das tarefas.
                `,
            }
        ],
        correctId: 1
    },
    {
      id: 3,
      title: 'Gestão',
      content: `
        No desenvolvimento do módulo de integração do sistema do SAMU com os sistemas de hospitais,
        um analista gerou o seguinte diagrama de sequência
      `,
      photos: ['assets/enade/questao-pagina-35.png'],
      asking: {
          title: `
             Com relação ao diagrama apresentado, avalie as asserções a seguir e a relação proposta entre elas.
          `,
          body: [
            `I. As chamadas 4: procurarVaga() e 5: procurarVaga() são feitas simultaneamente (em paralelo) pela
            API para minimizar o tempo de espera da chamada 2: procurarLeitos().`,
            `II. As chamadas 10: definirVaga() e 12: definirVaga() são feitas simultaneamente (em paralelo),
            mas a espera do retorno é feita em sequência, o que aumentará o tempo de resposta`,
          ],
          footer: 'A respeito dessas asserções, assinale a opção correta.',
      },
      alternatives: [
          {
              id: 1,
              label: `
                  As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I
              `
          },
          {
              id: 2,
              label: `
                 As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I
              `,
          },
          {
              id: 3,
              label: `
                  A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.
              `,
          },
          {
              id: 4,
              label: `
                 A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.
              `,
          },
          {
              id: 5,
              label: `
              As asserções I e II são proposições falsas
              `,
          }
      ],
      correctId: 1
  },

];

export const QUIZ_STARTED_REVIEW_STATE_KEY = 'quiz_started_review_state';

@Component({
  selector: 'app-quiz-started',
  templateUrl: './quiz-started.component.html',
  styleUrls: ['./quiz-started.component.scss'],
})
export class QuizStartedComponent implements OnDestroy, ViewDidEnter {

    timer = signal([0, 0, 0]); // hours, minutes and seconds

    questions = questions;

    static readonly HOUR_LIMIT = 2; // 2 horas

    @ViewChild(QuizQuestionComponent)
    quizQuestionComponent!: QuizQuestionComponent;

    @ViewChild(IonContent)
    ionContent!: IonContent;

    currentQuestion = signal<Question | null>(null);

    currentQuestionIndex = signal<number | null>(null);

    listCorrectQuestionsId = signal<number[]>([]);

    currentPercentage = signal(0);

    disableButton = signal(false);

    isReview = signal(false);

    isBellSwinging = signal(false);

    remainingChances = signal(3);

    subscription = new Subscription();

    timerSubscription = new Subscription();

    constructor(
      readonly router: Router,
      readonly route: ActivatedRoute,
      readonly store: Store<AppState>
    ) {}

    ionViewDidEnter(): void {
      this.timerSubscription.unsubscribe();

      console.log(this.store.selectSignal(selectQuizResultData)())

      const data = this.store.selectSignal(selectQuizResultData)();

      if (data.review) {
        this.timer.set(data.timer);
        this.listCorrectQuestionsId.set(data.correctQuestionsId);
        this.currentPercentage.set(1);
        this.isReview.set(true);
        this.isBellSwinging.set(false);
      } else {
        this.timer.set([0, 0, 0]);
        this.listCorrectQuestionsId.set([]);
        this.currentPercentage.set(0);
        this.disableButton.set(true);
        this.timerSubscription = new Subscription();
        this.isReview.set(false);
        this.startTimer();
        this.showBellSwinging();
      }

      if (this.questions.length > 0) {
        this.currentQuestion.set(this.questions[0]);
        this.currentQuestionIndex.set(0);
      }

    }


    startTimer() {
      const subscription = interval(1000)
      .pipe(
        scan(seconds => seconds + 1, 0),
        tap(totalSeconds => {
          this.timer.update(oldTimer => {
            let [hours, minutes, seconds] = oldTimer;

            // Calcular os segundos, minutos e horas
            seconds = totalSeconds % 60;
            minutes = Math.floor(totalSeconds / 60) % 60;
            hours = Math.floor(totalSeconds / 3600);

            return [hours, minutes, seconds];
          });
        })
      )
      .subscribe();

      this.timerSubscription.add(subscription);

      subscription.add(subscription);
    }

   get timerFormatted() {
        const [hours, minutes, seconds] = this.timer();
        const hoursString = hours > 0 ? `${hours.toString().padStart(2, '0')}:` : '';
        return `${hoursString}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
   }

   get timeHasPassed() {
    return this.timer()[0] > QuizStartedComponent.HOUR_LIMIT;
   }

   onClickBell() {
      const correctId = this.currentQuestion()?.correctId!;
      if (correctId === this.quizQuestionComponent.selectedAlternativeId()) {
        return;
      }
      this.remainingChances.update(oldRemainingChances => oldRemainingChances - 1);
      this.listCorrectQuestionsId().push(correctId);
      this.quizQuestionComponent.markAnswer(correctId);
   }

   goToNext() {
        if (this.currentQuestionIndex() === null) return;

        const currentQuestionIndex = this.currentQuestionIndex()! + 1;
        this.currentPercentage.set(currentQuestionIndex / this.questions.length);


        if (this.quizQuestionComponent.isCorrect()) {
          this.listCorrectQuestionsId.set(this.listCorrectQuestionsId().concat(this.currentQuestion()!.id));
        }

        this.quizQuestionComponent.selectedAlternativeId.set(null);

        if (currentQuestionIndex < this.questions.length) {
            this.currentQuestion.set(this.questions[currentQuestionIndex]);
            this.currentQuestionIndex.set(currentQuestionIndex);
            this.disableButton.set(true);
            this.quizQuestionComponent.scrollEnd.set(false);
            this.quizQuestionComponent.scrollEndSize.set(-1);
            this.showBellSwinging();
        } else {
          this.store.dispatch(setQuizResultData({
            correctQuestionsId: this.listCorrectQuestionsId(),
            questions: this.questions,
            timer: this.timer(),
            showDialog: true
          }));
          this.router.navigate(['/quiz/result']);
        }
   }

  showBellSwinging() {
    if (this.remainingChances() <= 0) return;
    this.isBellSwinging.set(false);
    setTimeout(() => {
      this.isBellSwinging.set(true);
    }, 30000);
  }

   seeNextQuestion() {
      const currentQuestionIndex = this.currentQuestionIndex()! + 1;
      if (currentQuestionIndex < this.questions.length) {
        this.currentQuestion.set(this.questions[currentQuestionIndex]);
        this.currentQuestionIndex.set(currentQuestionIndex);
      } else {
        this.store.dispatch(setQuizResultData({
          showDialog: false
        } as QuizResultState));
        this.router.navigate(['/quiz/result']);
      }
   }

   seePreviousQuestion() {
      if (this.currentQuestionIndex() === null) return;
      const currentQuestionIndex = this.currentQuestionIndex()! - 1;
      if (currentQuestionIndex >= 0) {
        this.currentQuestion.set(this.questions[currentQuestionIndex]);
        this.currentQuestionIndex.set(currentQuestionIndex);
      }
   }

   ngOnDestroy(): void {
       this.subscription.unsubscribe();
   }
}
