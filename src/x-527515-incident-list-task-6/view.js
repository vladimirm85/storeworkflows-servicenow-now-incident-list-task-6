import '@servicenow/now-loader';
import { Fragment } from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-modal';
import './search-section';
import './incident-card';
import './modal-element';
import {
  FETCH_INCIDENTS,
  IS_LOADING,
  DELETE_SEARCH_FIELD,
  ADD_SEARCH_FIELD,
  SET_SEARCH_TEXT,
  CLEAR_SEARCH_TEXT,
  CLOSE_MODAL,
  DELETE_INCIDENT,
  FETCH_INCIDENTS_PARAMS,
} from '../constans';

export const view = (
  { isLoading, incidents, searchText, isModalOpen, modalIncident },
  { dispatch }
) => {
  const cards = incidents.map((card) => (
    <incident-card
      sysId={card.sys_id}
      shortDescription={card.short_description}
      number={card.number}
      incidentState={card.state}
      assignmentGroup={card.assignment_group.display_value}
      assignedTo={card.assigned_to.display_value}
      sysUpdatedOn={card.sys_updated_on}
    />
  ));

  const handleSearchFields = (isRemoving, searchField) => {
    !isRemoving
      ? dispatch(DELETE_SEARCH_FIELD, { searchField })
      : dispatch(ADD_SEARCH_FIELD, { searchField });
  };

  const searchIncidents = () => {
    if (searchText) {
      dispatch(IS_LOADING);
      dispatch(FETCH_INCIDENTS, FETCH_INCIDENTS_PARAMS);
    }
  };

  const setSearchText = (searchText) => {
    dispatch(SET_SEARCH_TEXT, { searchText });
  };

  const clearSearchText = () => {
    dispatch(CLEAR_SEARCH_TEXT);
  };

  const closeModal = () => dispatch(CLOSE_MODAL);

  const deleteIncedent = (incidentId) => {
    dispatch(CLOSE_MODAL);
    dispatch(DELETE_INCIDENT, { sys_id: incidentId });
  };

  return (
    <Fragment>
      <search-section
        className={'search-section'}
        handleSearchFields={handleSearchFields}
        setSearchText={setSearchText}
        clearSearchText={clearSearchText}
        searchIncidents={searchIncidents}
        searchText={searchText}
      />
      {isLoading ? (
        <now-loader
          className={'loader'}
          label="Loading..."
          size="lg"
        ></now-loader>
      ) : (
        <div>
          <modal-element
            isModalOpen={isModalOpen}
            incident={modalIncident}
            closeModal={closeModal}
            deleteIncedent={deleteIncedent}
          />
          <div className={'wrap'}>{cards}</div>
        </div>
      )}
    </Fragment>
  );
};
