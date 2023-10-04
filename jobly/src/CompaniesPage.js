import SearchBar from "./SearchBar";
import CompanyPanel from "./CompanyPanel";
import { useState } from "react";
import JoblyApi from "./api";
import { useEffect } from "react";

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

  async function searchCompanies(data= "") {
    const searchResults = await JoblyApi.getCompanies(data);
    setCurrCompanies(c => searchResults);
    setIsLoading(l => false);
  }

  useEffect( function getInitialCompanies(){
    searchCompanies();
  }, []);

  return (
    <>
      <h1>Companies Page!</h1>
      <SearchBar searchFunc={searchCompanies}/>
      {!isLoading
      ? currCompanies.map( company => <CompanyPanel key={company.handle} company={company} /> )
      : <p>Loading!</p>}
    </>);

}

export default CompaniesPage;