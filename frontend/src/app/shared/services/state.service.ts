import { Injectable, signal } from "@angular/core";

interface State {
  key: string;
  value: any;
}

@Injectable()
export default class StateService {

  private readonly states = signal<State[]>([]);

  addState(key: string, value: any) {
      this.states.update(oldStates => [...oldStates, { key, value }]);
      return true;
  }


  removeState(key: string) {
    this.states.update(oldStates => oldStates.filter(state => state.key !== key));
  }

  get<T>(key: string) {
        const state = this.states().find(state => state.key === key);
        if (!state) {
            return null;
        }
        return state.value as T;
    }


  containsKey(key: string) {
    return this.states().find(state => state.key === key) !== null;
  }
}
