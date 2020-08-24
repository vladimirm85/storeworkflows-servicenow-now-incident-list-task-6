import { createHttpEffect } from '@servicenow/ui-effect-http';
import { FETCH_INCIDENTS_SUCCESS, DELETE_INCIDENT_SUCCESS } from '../constans';

export const fetchIncidentsEffect = createHttpEffect('api/now/table/incident', {
  queryParams: ['sysparm_limit', 'sysparm_display_value', 'sysparm_query'],
  successActionType: FETCH_INCIDENTS_SUCCESS,
});

export const deleteIncidentEffect = createHttpEffect(
  'api/now/table/incident/:sys_id',
  {
    method: 'DELETE',
    pathParams: ['sys_id'],
    successActionType: DELETE_INCIDENT_SUCCESS,
  }
);
