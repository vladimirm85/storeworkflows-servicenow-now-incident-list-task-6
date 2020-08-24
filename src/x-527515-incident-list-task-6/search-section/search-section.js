import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import actions from './actions';
import styles from './styles.scss';
import { view } from './view';

export const initialCheckboxesValues = {
  short_description: true,
  number: false,
  state: false,
  assignment_group: false,
  assigned_to: false,
};

createCustomElement('search-section', {
  renderer: { type: snabbdom },
  view,
  styles,
  initialState: {
    checkedBoxes: initialCheckboxesValues,
  },
  properties: {
    setSearchText: () => {},
    searchIncidents: () => {},
    handleSearchFields: () => {},
    clearSearchText: () => {},
    searchText: '',
  },
  ...actions,
});
