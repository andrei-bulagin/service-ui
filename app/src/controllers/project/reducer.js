import { combineReducers } from 'redux';
import {
  PROJECT_INFO_INITIAL_STATE,
  PROJECT_PREFERENCES_INITIAL_STATE,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_PREFERENCES_SUCCESS,
  TOGGLE_DISPLAY_FILTER_ON_LAUNCHES,
  UPDATE_AUTO_ANALYSIS_CONFIGURATION,
  UPDATE_EMAIL_CONFIG_SUCCESS,
} from './constants';

const toggleFilter = (filters = [], filter) => {
  const index = filters.indexOf(filter);
  if (index !== -1) {
    return filters.filter((item) => item !== filter);
  }
  return [...filters, filter];
};

export const projectInfoReducer = (state = PROJECT_INFO_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_PROJECT_SUCCESS:
      return { ...state, ...payload };
    case UPDATE_AUTO_ANALYSIS_CONFIGURATION:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          attributes: {
            ...((state.configuration && state.configuration.attributes) || {}),
            ...payload,
          },
        },
      };
    case UPDATE_EMAIL_CONFIG_SUCCESS:
      return {
        ...state,
        ...{ configuration: { ...state.configuration, emailConfiguration: payload } },
      };
    default:
      return state;
  }
};

export const projectPreferencesReducer = (
  state = PROJECT_PREFERENCES_INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case FETCH_PROJECT_PREFERENCES_SUCCESS:
      return { ...state, ...payload };
    case TOGGLE_DISPLAY_FILTER_ON_LAUNCHES:
      return { ...state, filters: toggleFilter(state.filters, payload) };
    default:
      return state;
  }
};

export const projectReducer = combineReducers({
  info: projectInfoReducer,
  preferences: projectPreferencesReducer,
});
