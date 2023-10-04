
import { useParams } from "react-router-dom";

/**
 * CompaniesJobsPage: Shows details about a company, lists all jobs
 * associated with that company
 *
 * State:
 * -isLoading
 * -companyData
 */
function CompanyJobPage() {
  const params = useParams();
  return (<h1>Details about {params.handle}!</h1>);
}

export default CompanyJobPage;