const Dropdown = ({ label, onChange, value, optionArray }) => {
  return (
    <div className="card-body pt-2">
      <label for="language" className="form-label">
        {label}
      </label>
      <div className="mb-3">
        <select
          name="language"
          id="language"
          className="p-1 form-select text-light dark-version"
          value={value}
          onChange={onChange}
          required
        >
          <option className="bg-dark" value="">
            Select here
          </option>
          {optionArray.map((item) => {
            return (
              <option className="bg-dark" value={item.value}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
