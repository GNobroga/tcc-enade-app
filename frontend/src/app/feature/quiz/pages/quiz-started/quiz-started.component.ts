import { Component, effect, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { interval, scan, Subscription, switchMap, tap } from 'rxjs';
import { Question, QuizQuestionComponent } from '../../components/quiz-question/quiz-question.component';


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
        correctId: 3
    },
];

@Component({
  selector: 'app-quiz-started',
  templateUrl: './quiz-started.component.html',
  styleUrls: ['./quiz-started.component.scss'],
})
export class QuizStartedComponent implements OnInit, OnDestroy {

  timer = signal([0, 0, 0]); // hours, minutes and seconds

  questions = questions;

  @ViewChild(QuizQuestionComponent)
  quizQuestionComponent!: QuizQuestionComponent;

  currentQuestion = signal<Question | null>(null);

  currentQuestionIndex = signal<number | null>(null);

  checkIfIsCorrect = signal(false);

  disableButton = signal(false);

  subscription = new Subscription();

    ngOnInit() {
        if (this.questions.length > 0) {
            this.currentQuestion.set(this.questions[0]);
            this.currentQuestionIndex.set(0);
        }

        const subscription = interval(1000)
        .pipe(
            scan(seconds => (seconds >= 59 ? 0 : seconds + 1), 0),
            tap(seconds => {
                this.timer.update(oldTimer => {
                let [hours, minutes] = oldTimer;

                if (seconds >= 59) {
                    minutes += 1;
                }

                if (minutes >= 59) {
                    hours += 1;
                    minutes = 0;
                }

                return [hours, minutes, seconds];
                });
            })
        ).subscribe();

        subscription.add(subscription);
    }

   get timerFormatted() {
        const [hours, minutes, seconds] = this.timer();
        const hoursString = hours > 0 ? `${hours.toString().padStart(2, '0')}:` : '';
        return `${hoursString}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
   }

   toRespond() {
        this.checkIfIsCorrect.set(true);
   }

   goToNext() {
        if (this.currentQuestionIndex() === null) return;
        const currentQuestionIndex = this.currentQuestionIndex()! + 1;
        if (currentQuestionIndex < this.questions.length) {
            this.checkIfIsCorrect.set(false);
            this.currentQuestion.set(this.questions[currentQuestionIndex]);
            this.currentQuestionIndex.set(currentQuestionIndex);
            this.quizQuestionComponent.selectedAlternativeId.set(null);
        } else {
            window.alert('Não há mais questões no momento!');
        }
   }

   ngOnDestroy(): void {
       this.subscription.unsubscribe();
   }
}
