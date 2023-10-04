import { useState } from "react";
const initalFormData = "";
function SearchBar({ searchFunc }) {

  const [formData, setFormData] = useState(initalFormData);

  function handleChange(evt) {
    const { value } = evt.target;
    setFormData(f => value);
  }

  function handleClick(evt) {
    evt.preventDefault();
    searchFunc(formData);
    setFormData(initalFormData);
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input onChange={handleChange}
          name="search"
          value={formData}>
        </input>
        <button>Submit</button>
      </form>
    </div>

  );
}

export default SearchBar;