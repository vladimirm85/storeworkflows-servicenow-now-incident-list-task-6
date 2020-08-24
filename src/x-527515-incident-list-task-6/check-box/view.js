export const view = (state) => {
  const {
    properties: { label, name, handleSearchFields, checked, check },
  } = state;
  return (
    <span>
      {label}
      <input
        type={'checkbox'}
        name={name}
        on-click={(e) => {
          handleSearchFields(e.target.checked, e.target.name);
          check(name);
        }}
        checked={checked}
      ></input>
    </span>
  );
};
