import '@servicenow/now-button';
import '../check-box';
import { CHECKBOXES_DATA, ENTER_KEY_CODE, CHECK } from '../../constans';
export const view = (state, { dispatch }) => {
  const {
    properties: {
      setSearchText,
      searchIncidents,
      handleSearchFields,
      searchText,
      clearSearchText,
    },
    checkedBoxes,
  } = state;

  const check = (checkboxeName) => dispatch(CHECK, { name: checkboxeName });

  const checkboxes = CHECKBOXES_DATA.map((checkboxData) => (
    <check-box
      className={'check-box'}
      label={checkboxData.label}
      name={checkboxData.name}
      handleSearchFields={handleSearchFields}
      checked={checkedBoxes[checkboxData.name]}
      check={check}
    />
  ));

  return (
    <div className={'search-section'}>
      {checkboxes}
      <input
        type={'text'}
        value={searchText}
        on-blur={({ target: { value } }) => {
          setSearchText(value.toLowerCase().trim());
        }}
        on-keypress={({ keyCode, target: { value } }) => {
          if (keyCode === ENTER_KEY_CODE && value.trim()) {
            setSearchText(value.toLowerCase().trim());
            searchIncidents();
          }
        }}
      ></input>
      <now-button
        className={'now-button'}
        label="Search"
        variant="primary"
        on-click={searchIncidents}
        size="sm"
      ></now-button>
      <now-button
        className={'now-button'}
        label="Clear"
        variant="primary"
        on-click={() => {
          clearSearchText();
          dispatch('RESET_CHECKED_BOXES');
        }}
        size="sm"
      ></now-button>
    </div>
  );
};
