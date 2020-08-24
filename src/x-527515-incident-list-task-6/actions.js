import { actionTypes } from '@servicenow/ui-core';
import {
  FETCH_INCIDENTS,
  FETCH_INCIDENTS_SUCCESS,
  DELETE_INCIDENT,
  DELETE_INCIDENT_EFFECT,
  DELETE_INCIDENT_SUCCESS,
  NOW_DROPDOWN_PANEL_ITEM_CLICKED,
  SET_SEARCH_TEXT,
  CLEAR_SEARCH_TEXT,
  DELETE_SEARCH_FIELD,
  ADD_SEARCH_FIELD,
  CLOSE_MODAL,
  FETCH_INCIDENTS_PARAMS,
  IS_LOADING,
} from '../constans';
import { fetchIncidentsEffect, deleteIncidentEffect } from './effects';

const { COMPONENT_BOOTSTRAPPED } = actionTypes;

export default {
  actionHandlers: {
    [COMPONENT_BOOTSTRAPPED]: {
      effect({ dispatch }) {
        dispatch(FETCH_INCIDENTS, FETCH_INCIDENTS_PARAMS);
      },
    },
    [FETCH_INCIDENTS]: fetchIncidentsEffect,
    [FETCH_INCIDENTS_SUCCESS]: ({ action, state, updateState }) => {
      const { searchFields, searchText } = state;

      const searchIncidents = () => {
        if (searchText) {
          return action.payload.result.filter((incident) => {
            let isFound = false;
            searchFields.forEach((searchField) => {
              const searchFieldValue =
                (searchField === 'assignment_group' ||
                  searchField === 'assigned_to') &&
                incident[searchField]
                  ? incident[searchField].display_value
                  : incident[searchField];

              if (searchFieldValue.toLowerCase().includes(searchText))
                isFound = true;
              return;
            });
            return isFound;
          });
        }
        return action.payload.result;
      };

      updateState({
        incidents: searchIncidents(),
        isLoading: false,
      });
    },
    [DELETE_INCIDENT_EFFECT]: deleteIncidentEffect,
    [DELETE_INCIDENT_SUCCESS]: ({ state, updateState }) => {
      updateState({
        isLoading: false,
        incidents: state.incidents.filter(
          (incident) => incident.sys_id !== state.deletedIncidentId
        ),
      });
    },
    [DELETE_INCIDENT]: ({ action, dispatch, updateState }) => {
      updateState({
        isLoading: true,
        deletedIncidentId: action.payload.sys_id,
      });
      dispatch(DELETE_INCIDENT_EFFECT, { sys_id: action.payload.sys_id });
    },
    [NOW_DROPDOWN_PANEL_ITEM_CLICKED]: ({
      action,
      state,
      dispatch,
      updateState,
    }) => {
      const { payload } = action;
      if (payload.item.id === 'delete') {
        dispatch(DELETE_INCIDENT, { sys_id: payload.item.cardId });
      } else {
        const incident = state.incidents.find(
          (incident) => incident.sys_id === payload.item.cardId
        );
        updateState({
          isModalOpen: true,
          modalIncident: incident,
        });
      }
    },
    [SET_SEARCH_TEXT]: ({ action, updateState }) => {
      updateState({
        searchText: action.payload.searchText,
      });
    },
    [CLEAR_SEARCH_TEXT]: ({ state, dispatch, updateState }) => {
      if (state.searchText) {
        updateState({
          searchText: '',
        });
        dispatch(IS_LOADING);
        dispatch(FETCH_INCIDENTS, FETCH_INCIDENTS_PARAMS);
      }
    },
    [ADD_SEARCH_FIELD]: ({ action, updateState }) => {
      updateState({
        path: 'searchFields',
        value: action.payload.searchField,
        operation: 'push',
      });
    },
    [DELETE_SEARCH_FIELD]: ({ action, state, updateState }) => {
      updateState({
        searchFields: state.searchFields.filter(
          (searchField) => searchField !== action.payload.searchField
        ),
      });
    },
    [CLOSE_MODAL]: ({ updateState }) => {
      updateState({
        isModalOpen: false,
        modalIncident: null,
      });
    },
    [IS_LOADING]: ({ updateState }) => {
      updateState({
        isLoading: true,
      });
    },
  },
};
