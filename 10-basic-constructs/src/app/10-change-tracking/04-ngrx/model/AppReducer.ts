import {AppState} from './AppState';

export const INCREASE_MANUAL = 'INCREASE_MANUAL';
export const INCREMENT_PROGRAMMATIC = 'INCREMENT_PROGRAMMATIC';

const initialAppState = new AppState();
// export const initialState = {app: initialAppState};

export function appReducer(state = initialAppState, action): AppState {
  switch (action.type) {
    case INCREASE_MANUAL: {
      return {...state, counterManual: state.counterManual + 1};
    }
    case INCREMENT_PROGRAMMATIC: {
      return {...state, counterProgrammatic: state.counterProgrammatic + 1};
    }

    default:
      return state;
  }
}
