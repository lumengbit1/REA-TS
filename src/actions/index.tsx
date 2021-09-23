import * as constants from '../constants';
import { Results, LoadingType, Errors } from '../types/index';
import axios from 'axios';
import { Dispatch } from 'redux';
import settings from '../settings';

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM_TYPE;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM_TYPE;
}

export interface GetResultsInterface {
  type: constants.GET_RESULTS_TYPE;
}

export interface ResultsLoadingInterface {
  type: constants.RESULTS_LOADING_TYPE;
  payload: LoadingType;
}

export interface ResultsSuccessedInterface {
  type: constants.GET_RESULTS_RESOLVED_TYPE;
  payload: Results[];
}

export interface GetSavedInterface {
  type: constants.GET_SAVED_TYPE;
}

export interface SavedLoadingInterface {
  type: constants.SAVED_LOADING_TYPE;
  payload: LoadingType;
}

export interface SavedSuccessedInterface {
  type: constants.GET_SAVED_RESOLVED_TYPE;
  payload: Results[];
}

export interface ResultsFailedInterface {
  type: constants.GET_REJECTED_TYPE;
  payload: Errors;
}

export type GETACTION = GetResultsInterface | ResultsLoadingInterface | ResultsSuccessedInterface | ResultsFailedInterface | GetSavedInterface | SavedLoadingInterface | SavedSuccessedInterface;

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

export function getSaved(): GetSavedInterface {
  return {
    type: constants.GET_SAVED,
  }
}

export function getSavedLoading(params: LoadingType): SavedLoadingInterface {
  return {
    type: constants.SAVED_LOADING,
    payload: params,
  }
}

export function getSavedSuccessed(params: Results[]): SavedSuccessedInterface {
  return {
    type: constants.GET_SAVED_RESOLVED,
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

export const getSavedAction = () => (dispatch: Dispatch) => {
  dispatch(getSaved());
  dispatch(getSavedLoading(true));

  return axios.get<Results[]>(`${settings.SAVED_BASE_API_DOMAIN}`)
    .then((response) => {
      dispatch(getSavedLoading(false));
      return dispatch(getSavedSuccessed(response.data));
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