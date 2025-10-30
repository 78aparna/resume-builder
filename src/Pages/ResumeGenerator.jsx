import React from 'react'
import { FcDocument } from "react-icons/fc";
import { FaDownload } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function ResumeGenerator() {
  return (
    <div className='container-fluid'>
      <h1 className='text-center my-5'>Create a job-Winning Resume in minutes</h1>
      <div style={{height:'60vh'}} className="row justify-content-center align-items-center">
        <div className="col-md-1"></div>
        <div className="col-md-4 border rounded shadow p-5 text-center">
          <FcDocument className='text-primary fs-1 mb-3' />
          <h3>Add your Information</h3>
          <p>Add pre-written example to each action</p>
          <h4>Step 1</h4>

        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4 border rounded shadow p-5 text-center">
          <FaDownload className='text-danger fs-1 mb-3' />
          <h3>Download your Resume</h3>
          <p>Download and start applying</p>
          <h4>Step 2</h4>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className='text-center mb-5 text-decoration-none'>
        <Link to={'/form'}className=' btn text-white'style={{backgroundColor:'purple'}}>LET'S START</Link>
      </div>
    </div>
  )
}

export default ResumeGenerator
