import { EnthusiasmAction, GETACTION } from '../actions';
import { StoreState, NewStoreState } from '../types/index';
import * as constants from '../constants';
import { produce } from 'immer';

const initialState: StoreState = {
  languageName: 'TypeScript',
  enthusiasmLevel: 1,
};


const newInitialState: NewStoreState = {
  results: [],
  saved: [],
  errors: '',
  loading: {
    saved: false,
    results: false,
  },
};

export function enthusiasm(state = initialState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case constants.INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case constants.DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  return state;
}

export function reducer(state = newInitialState, action: GETACTION): NewStoreState {
  switch (action.type) {
    case constants.GET_RESULTS:
      return state;
    case constants.RESULTS_LOADING:
      return produce(state, draft => { draft.loading.results = action.payload });
    case constants.GET_RESULTS_RESOLVED:
      return produce(state, draft => { draft.results = action.payload });
    case constants.GET_REJECTED:
      return produce(state, draft => { draft.errors = action.payload });
    case constants.GET_SAVED:
      return state;
    case constants.SAVED_LOADING:
      return produce(state, draft => { draft.loading.results = action.payload });
    case constants.GET_SAVED_RESOLVED:
      return produce(state, draft => { draft.results = action.payload });
  }
  return state;
}