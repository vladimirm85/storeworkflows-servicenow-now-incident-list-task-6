import { CHECK, RESET_CHECKED_BOXES } from '../../constans';
import { initialCheckboxesValues } from './search-section';

export default {
  actionHandlers: {
    [CHECK]: ({ action, state, updateState }) => {
      const updatedCheckedBoxes = { ...state.checkedBoxes };
      updatedCheckedBoxes[action.payload.name] = !state.checkedBoxes[
        action.payload.name
      ];
      updateState({
        checkedBoxes: updatedCheckedBoxes,
      });
    },
    [RESET_CHECKED_BOXES]: ({ updateState }) => {
      updateState({
        checkedBoxes: initialCheckboxesValues,
      });
    },
  },
};
