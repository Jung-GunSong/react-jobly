import { Link } from "react-router-dom";

function CompanyPanel({ company }) {
  return (
    <div>
      <Link to={`/companies/${company.handle}`}>
        <p>{company.name}</p>
        <p>{company.description}</p>
        <p>{company.numEmployees}</p>
        <img alt="company logo" src={company.logoUrl} />
      </Link>
    </div>);
}

export default CompanyPanel;