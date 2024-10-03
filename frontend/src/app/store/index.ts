import { QuizResultState } from "./actions/quiz-result.actions";

export interface AppState {
  quizResultData: QuizResultState
}

export const selectQuizResultData = (state: AppState) => state.quizResultData;
