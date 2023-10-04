import SearchBar from "./SearchBar";
import CompanyPanel from "./CompanyPanel";
import { useState } from "react";
import JoblyApi from "./api";

/**
 * CompaniesPage: Renders list of all companies
 *
 * State:
 * - isLoading
 * - currCompanies
 *
 */

function CompaniesPage() {
  const [currCompanies, setCurrCompanies] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function searchCompanies(formData) {
    const searchResults = await JoblyApi.getCompanies(formData);
    setCurrCompanies(c => searchResults);
  }

  return (
    <>
      <h1>Companies Page!</h1>
    </>);

}

export default CompaniesPage;