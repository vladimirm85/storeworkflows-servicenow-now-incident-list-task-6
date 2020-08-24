import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import actions from './actions';
import styles from './styles.scss';
import { view } from './view';

createCustomElement('x-527515-incident-list-task-6', {
  renderer: { type: snabbdom },
  view,
  styles,
  initialState: {
    incidents: [],
    searchFields: ['short_description'],
    searchText: '',
    deletedIncidentId: '',
    isModalOpen: false,
    modalIncident: null,
    isLoading: true,
  },
  ...actions,
});
