import { Link } from "react-router-dom";
import "./CompanyPanel.css"

function CompanyPanel({ company }) {
  return (

      <Link to={`/companies/${company.handle}`}>
        <div className="company-panel">
          <p>{company.name}</p>
          <p>{company.description}</p>
          <p>{company.numEmployees}</p>
          { company.logoUrl && <img alt="company logo" src={company.logoUrl} />}
        </div>
      </Link>
    );
}

export default CompanyPanel;