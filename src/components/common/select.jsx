import React from "react";

// Interface for the props of the component
const Select = ({ name, label, error, genres, ...rest }) => {
  return (
    <div className="form-group">
      {/* <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>} */}
      <label htmlFor={name}>{label}</label>
      <select name="cars" id="cars" className="form-control">
        {genres.map((genre) => (
          <option key={genre._id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
