import * as constants from '../constants';
import { Results, LoadingType, Errors } from '../types/index';
import axios from 'axios';
import { Dispatch } from 'redux';
import settings from '../settings';

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export interface GetResultsInterface {
  type: constants.GET_RESULTS;
}

export interface ResultsLoadingInterface {
  type: constants.RESULTS_LOADING;
  payload: LoadingType;
}

export interface ResultsSuccessedInterface {
  type: constants.GET_RESULTS_RESOLVED;
  payload: Results[];
}

export interface ResultsFailedInterface {
  type: constants.GET_REJECTED;
  payload: Errors;
}

export type GETACTION = GetResultsInterface | ResultsLoadingInterface | ResultsSuccessedInterface | ResultsFailedInterface;

export function getResults(): GetResultsInterface {
  return {
    type: constants.GET_RESULTS,
  }
}

export function getResultsLoading(params: LoadingType): ResultsLoadingInterface {
  return {
    type: constants.RESULTS_LOADING,
    payload: params,
  }
}

export function getResultsSuccessed(params: Results[]): ResultsSuccessedInterface {
  return {
    type: constants.GET_RESULTS_RESOLVED,
    payload: params,
  }
}

export function getFailed(params: Errors): ResultsFailedInterface {
  return {
    type: constants.GET_REJECTED,
    payload: params,
  }
}

export const getResultsAction = () => (dispatch: Dispatch) => {
  dispatch(getResults());
  dispatch(getResultsLoading(true));

  return axios.get<Results[]>(`${settings.RESULTS_BASE_API_DOMAIN}`)
    .then((response) => {
      dispatch(getResultsLoading(false));
      return dispatch(getResultsSuccessed(response.data));
    })
    .catch((error) => dispatch(getFailed(error)));
};


export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  }
}