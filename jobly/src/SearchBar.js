import { useState } from "react";
const initalFormData = "";

/**
 * SearchBar:
 *
 * Renders a form that enables a filtered search upon submission
 *
 * State:
 * - formData: "Anderson"
 *
 * Props:
 * - searchFunc: sends formData to Jobs or Companies components
 *
 */
function SearchBar({ searchFunc }) {

  //TODO: change formData to searchData or searchTerm
  const [formData, setFormData] = useState(initalFormData);

  /** handles change in user input of search bar form */
  function handleChange(evt) {
    const { value } = evt.target;
    setFormData(f => value);
  }
  /** handles submit of user input in search bar form, sends data to Job or
   * Companies components
   */
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