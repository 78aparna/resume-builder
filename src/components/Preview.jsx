import { Divider,Button } from '@mui/material'
import React from 'react'

function Preview({resumeDetails}) {
  return (
    <div>
      <div style={{margin:'70px'}} className='shadow p-5 w-100 rounded text-center'>
       <h3>{resumeDetails?.username}</h3>
       <h5>{resumeDetails?.jobTitle}</h5>
       <h6><span className='mx-2'>{resumeDetails?.location}</span>|<span className='mx-2'>{resumeDetails?.email}</span>|
       <span className='mx-2'>{resumeDetails?.mobile}</span></h6>
       <p className="my-3">
        <a className='mx-2' href={resumeDetails?.github} target='_blank'>GITHUB</a>|
         <a className='mx-2' href={resumeDetails?.linkedin} target='_blank'>LINKEDIN</a>|
          <a className='mx-2' href={resumeDetails?.portfolio} target='_blank'>PORTFOLIO</a>
       </p>
       <Divider sx={{fontSize:'25px'}}>Summary</Divider>
       <p style={{textAlign:'justify'}}>{resumeDetails?.summary}</p>
       <Divider sx={{fontSize:'25px', marginBottom:'10px'}}>Education</Divider>
        <h5>{resumeDetails?.course}</h5>
       <h6><span className='mx-2'>{resumeDetails?.college}</span>|<span className='mx-2'>{resumeDetails?.university}</span>|
       <span className='mx-2'>{resumeDetails?.passoutyear}</span></h6>
      <Divider sx={{fontSize:'25px', marginBottom:'10px'}}>Proffessional Experience</Divider>
        <h5>{resumeDetails?.jobtype}</h5>
       <h6><span className='mx-2'>{resumeDetails?.company}</span>|<span className='mx-2'>{resumeDetails?.clocation}</span>|
       <span className='mx-2'>{resumeDetails?.duration}</span></h6>
       <Divider sx={{fontSize:'25px', marginBottom:'10px'}}>Skills</Divider>
       <div className="d-flex flex-wrap justify-content-between my-3">
        {
          resumeDetails?.userSkills?.map((item,index)=>(
            <Button key={index} variant="contained" className='m-1'>{item}</Button>
          ))
        }                 
                          
       
                           
        </div>

      
        </div>
    </div>
  )
}

export default Preview
