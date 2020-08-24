import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import { view } from './view';

createCustomElement('check-box', {
  renderer: { type: snabbdom },
  view,
  initialState: {
    checked: false,
  },
  properties: {
    checked: false,
    label: '',
    name: '',
    handleSearchFields: () => {},
    check: () => {},
  },
});
