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

  async function searchJobs(data = undefined) {
    const searchResults = await JoblyApi.getJobs(data);
    setCurrJobs(j => searchResults);
    setIsLoading(l => false);
  }

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