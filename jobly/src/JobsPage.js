import SearchBar from "./SearchBar";
import JobPanel from "./JobPanel";
import { useState } from "react";
import JoblyApi from "./api";
import { useEffect } from "react";
/**
 * Renders page of Job components
 *
 * State:
 * - isLoading
 * - currJobs
 *
 */
function JobsPage() {
  const [currJobs, setCurrJobs] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  /** Makes call to API to get list of all jobs, or some jobs based on search*/
  //TODO: don't set default to undefined OR api func
  async function searchJobs(data = undefined) {
    const searchResults = await JoblyApi.getJobs(data);
    //TODO: don't need cb pattern for setstate here
    setCurrJobs(j => searchResults);
    setIsLoading(l => false);
  }

  /**Renders list of all jobs after initial page load */
  useEffect(function getInitialCompanies() {
    searchJobs();
  }, []);

  return (
    <>
      <h1>Jobs Page!</h1>
      <SearchBar searchFunc={searchJobs} />
      {!isLoading
        ? currJobs.map(job =>
          <JobPanel key={job.id} job={job} />)
        : <p>Loading!</p>}
    </>);
}

export default JobsPage;