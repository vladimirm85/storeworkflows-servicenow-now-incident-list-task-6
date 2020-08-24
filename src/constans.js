export const FETCH_INCIDENTS = 'FETCH_INCIDENTS';
export const FETCH_INCIDENTS_SUCCESS = 'FETCH_INCIDENTS_SUCCESS';
export const DELETE_INCIDENT = 'DELETE_INCIDENT';
export const DELETE_INCIDENT_EFFECT = 'DELETE_INCIDENT_EFFECT';
export const DELETE_INCIDENT_SUCCESS = 'DELETE_INCIDENT_SUCCESS';
export const NOW_DROPDOWN_PANEL_ITEM_CLICKED =
  'NOW_DROPDOWN_PANEL#ITEM_CLICKED';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const DELETE_SEARCH_FIELD = 'DELETE_SEARCH_FIELD';
export const ADD_SEARCH_FIELD = 'ADD_SEARCH_FIELD';
export const ENTER_KEY_CODE = 13;
export const IS_LOADING = 'IS_LOADING';
export const CLEAR_SEARCH_TEXT = 'CLEAR_SEARCH_TEXT';
export const CHECK = 'CHECK';
export const RESET_CHECKED_BOXES = 'RESET_CHECKED_BOXES'
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const NOW_MODAL_FOOTER_ACTION_CLICKED =
  'NOW_MODAL#FOOTER_ACTION_CLICKED';
export const NOW_MODAL_OPENED_SET = 'NOW_MODAL#OPENED_SET';

export const CHECKBOXES_DATA = [
  {
    label: 'Incident',
    name: 'short_description',
  },
  {
    label: 'Number',
    name: 'number',
  },
  {
    label: 'State',
    name: 'state',
  },
  {
    label: 'Assignment Group',
    name: 'assignment_group',
  },
  {
    label: 'Assigned To',
    name: 'assigned_to',
  },
];

export const MODAL_BODY_ITEMS_DATA = [
  {
    label: 'Caller',
    name: 'caller_id',
  },
  {
    label: 'Incident',
    name: 'short_description',
  },
  {
    label: 'Number',
    name: 'number',
  },
  {
    label: 'State',
    name: 'state',
  },
  {
    label: 'Assignment Group',
    name: 'assignment_group',
  },
  {
    label: 'Assigned To',
    name: 'assigned_to',
  },
];

export const FETCH_INCIDENTS_PARAMS = {
  sysparm_limit: '100',
  sysparm_display_value: 'true',
  sysparm_query: 'ORDERBYDESCnumber',
};
