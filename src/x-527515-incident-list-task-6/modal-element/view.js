import '../modal-body-items';
import { MODAL_BODY_ITEMS_DATA } from '../../constans';

export const view = (state) => {
  const {
    properties: { isModalOpen, incident },
  } = state;

  const modalBody = incident
    ? MODAL_BODY_ITEMS_DATA.map((itemData) => {
        const value =
          (itemData.name === 'assignment_group' ||
            itemData.name === 'assigned_to' ||
            itemData.name === 'caller_id') &&
          incident[itemData.name]
            ? incident[itemData.name].display_value
            : incident[itemData.name];

        return (
          <modal-body-items
            className={'label'}
            label={itemData.label}
            value={value ? value : '-'}
          />
        );
      })
    : null;

  return (
    <now-modal
      footerActions={[{ label: 'Delete', variant: 'primary-negative' }]}
      size="lg"
      opened={isModalOpen}
    >
      <div className={'modal'}>{modalBody}</div>
    </now-modal>
  );
};
