import { createReducer, on } from "@ngrx/store"
import * as QuizResult from "../actions/quiz-result.actions"

const initialState: QuizResult.QuizResultState = {
  correctQuestionsId: [],
  questions: [],
  timer: [],
  showDialog: false,
  review: false,
}

export const quizResultReducer = createReducer(
  initialState,
  on(QuizResult.setQuizResultData, (state, props): QuizResult.QuizResultState => ({
    ...state,
    ...props
  })),
  on(QuizResult.resetQuizResultData, (): QuizResult.QuizResultState => ({
    correctQuestionsId: [],
    questions: [],
    showDialog: true,
    timer: [],
    review: false,
  }))
);
