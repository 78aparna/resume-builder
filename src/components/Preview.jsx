import { Divider,Button } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div>
      <div style={{margin:'70px'}} className='shadow p-5 w-100 rounded text-center'>
       <h3>Name</h3>
       <h5>Job Title</h5>
       <h6><span className='mx-2'>Location</span>|<span className='mx-2'>E-mail</span>|
       <span className='mx-2'>Mobile</span></h6>
       <p className="my-3">
        <a className='mx-2' href="" target='_blank'>GITHUB</a>|
         <a className='mx-2' href="" target='_blank'>LINKEDIN</a>|
          <a className='mx-2' href="" target='_blank'>PORTFOLIO</a>
       </p>
       <Divider sx={{fontSize:'25px'}}>Summary</Divider>
       <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, deleniti ullam quo aspernatur repudiandae amet fugit veritatis ipsam, veniam ducimus ex pariatur maiores neque earum alias corporis. Dolor, dolores quisquam!</p>
       <Divider sx={{fontSize:'25px', marginBottom:'10px'}}>Education</Divider>
        <h5>Course Name</h5>
       <h6><span className='mx-2'>College</span>|<span className='mx-2'>University</span>|
       <span className='mx-2'>Passout Year</span></h6>
      <Divider sx={{fontSize:'25px', marginBottom:'10px'}}>Proffessional Experience</Divider>
        <h5>Job / Internship</h5>
       <h6><span className='mx-2'>Company Name</span>|<span className='mx-2'>Company Location</span>|
       <span className='mx-2'>Duration</span></h6>
       <Divider sx={{fontSize:'25px', marginBottom:'10px'}}>Skills</Divider>
       <div className="d-flex flex-wrap justify-content-between my-3">
                         
                          
       <Button variant="contained" className='m-1'>Node JS</Button>
                           
        </div>

      
        </div>
    </div>
  )
}

export default Preview
