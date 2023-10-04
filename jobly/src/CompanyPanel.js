
function CompanyPanel({company}) {
  return (
          <div>
            <p>{company.name}</p>
            <p>{company.description}</p>
            <p>{company.numEmployees}</p>
            <img src={company.logoUrl} />
          </div>);
}

export default CompanyPanel;