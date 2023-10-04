
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import { useEffect } from "react";

/**
 * CompaniesJobsPage: Shows details about a company, lists all jobs
 * associated with that company
 *
 * State:
 * -isLoading
 * -companyData
 */
function CompanyJobPage() {
  const [companyData, setCompanyData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(function getCompanyData() {
    async function fetchCompanyData() {
      const company = await JoblyApi.getCompany(params.handle);
      setCompanyData(c => company);
      setIsLoading(l => false);
    }

    fetchCompanyData();
  }, []);

  return (
    <>
      {!isLoading
        ?
        <div>
          <h1>{companyData.company.name}</h1>
          <p>{companyData.company.description}</p>
        </div>
        : <p>Loading!</p>}
    </>);
}

export default CompanyJobPage;