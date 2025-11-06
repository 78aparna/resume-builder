import React from 'react'

import Preview from '../components/Preview'
import View from '../components/View'

function UserForm() {
  const [resumeDetails,SetResumeDetails]=React.useState({
      username:"",
      jobTitle:"",
      location:"",
      email:"",
      mobile:"",
      github:"",
      linkedin:"",
      portfolio:"",
      course:"",
      college:"",
      university:"",
      passoutyear:"",
      jobtype:"",
      company:"",
      clocation:"",
      duration:"",
      userSkills:[],
      summary:"",
  
  
    })
  return (
    <div className='container'>
      <div className="row p-5">
        <div className="col-lg-6">
            <View resumeDetails = {resumeDetails} SetResumeDetails={SetResumeDetails}/>  
        </div>
        <div className="col-lg-6">
               {
               resumeDetails.username&&
               <Preview resumeDetails={resumeDetails}/>
               }
        </div>
      </div>
    </div>
  )
}

export default UserForm
