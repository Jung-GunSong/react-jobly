import { useState } from "react";

function SearchBar({searchCompanies}) {

  const [formData, setFormData] = useState("");

  function handleChange(){

  }

  function handleClick(){

  }
 return(

  <div>
    <form onSubmit={handleClick}>
      <input onChange={handleChange}>
      </input>
      <button>Submit</button>
    </form>
  </div>

 )
}

export default SearchBar;