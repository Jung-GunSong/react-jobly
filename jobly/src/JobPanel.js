import "./JobPanel.css"

function JobPanel({job}){

  return(
    <div className="job-panel">
      <h1>{job.title}</h1>
    </div>
  )

}

export default JobPanel