import React, { useState,useRef } from 'react'
import { MdEditDocument } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { ImCross } from "react-icons/im";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Edit({resumeDetails,SetResumeDetails}) {
    const[open,setOpen]= useState(false)
    const skillRef = useRef()

    const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addSkill = (skill)=>{
    if(resumeDetails.userSkills.includes(skill)){
      alert("The given skill already added, Please add another!!!")
    }else{
      SetResumeDetails({...resumeDetails,userSkills:[...resumeDetails.userSkills,skill]})
      // to clear add skill textbox
      skillRef.current.value = ""
    }
  }
  const removeSkill = (skill)=>{
    SetResumeDetails({...resumeDetails,userSkills:resumeDetails.userSkills.filter(item=>item!=skill)})
  }
  return (
    <div>
      <button onClick={handleOpen} className='btn fs-3 text-warning'><MdEditDocument/></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal details */}
            <div>
                            <h4>Personal Details</h4>
                        <div className="row p-3">
                            <TextField value={resumeDetails.username} onChange={e=>SetResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic" label="Full Name" variant="standard" />
                            <TextField value={resumeDetails.jobTitle}  onChange={e=>SetResumeDetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic" label="Job Title" variant="standard" />
                            <TextField value={resumeDetails.location}  onChange={e=>SetResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic" label="Location" variant="standard" />
                        </div>
                        </div>
            {/* contact details */}
            <div>
                          <h4>Contact Details</h4>
                          <div className="row p-3">
                            <TextField value={resumeDetails.email}  onChange={e=>SetResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic" label="Email" variant="standard" />
                            <TextField value={resumeDetails.mobile}  onChange={e=>SetResumeDetails({...resumeDetails,mobile:e.target.value})} id="standard-basic" label="Phone Number" variant="standard" />
                            <TextField value={resumeDetails.github}  onChange={e=>SetResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic" label="Github Profile Link" variant="standard" />
                            <TextField value={resumeDetails.linkedin}  onChange={e=>SetResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic" label="Linkedin Profile Link" variant="standard" />
                            <TextField value={resumeDetails.portfolio}  onChange={e=>SetResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic" label="Portfolio Link" variant="standard" />
               
                          </div>
                          
                        </div>
                        {/* educational details */}
                        <div>
                                       <h4>Educational Details</h4>
                                       <div className="row p-3">
                                        <TextField value={resumeDetails.course}  onChange={e=>SetResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic" label="Course Name" variant="standard" />
                                        <TextField value={resumeDetails.college}  onChange={e=>SetResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic" label="College Name" variant="standard" />
                                        <TextField value={resumeDetails.university}  onChange={e=>SetResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic" label="University" variant="standard" />
                                        <TextField value={resumeDetails.passoutyear}  onChange={e=>SetResumeDetails({...resumeDetails,passoutyear:e.target.value})} id="standard-basic" label="Year Of Passout" variant="standard" />
                                     
                                       </div>
                                          
                                    </div>
                                    {/* Proffessional Details */}
                                    <div>
                                                    <h4>Proffessional Details</h4>
                                                    <div className="row p-3">
                                                    <TextField value={resumeDetails.jobtype}  onChange={e=>SetResumeDetails({...resumeDetails,jobtype:e.target.value})} id="standard-basic" label="Job or internship" variant="standard" />
                                                    <TextField value={resumeDetails.company}  onChange={e=>SetResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic" label="Company Name" variant="standard" />
                                                    <TextField value={resumeDetails.clocation}  onChange={e=>SetResumeDetails({...resumeDetails,clocation:e.target.value})} id="standard-basic" label="Company Location" variant="standard" />
                                                    <TextField value={resumeDetails.duration}  onChange={e=>SetResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic" label="Duration" variant="standard" />
                                                    
                                                    </div>
                                                    
                                                </div>
                                                {/* skills */}
                                                <div>
                <h4>Skills</h4>
                <div className="d-flex align-items-center justify-content-between p-3 w-100">
                  <input ref={skillRef} type="text" placeholder='Skills' className='form-control'/>
                  <Button onClick={()=>addSkill(skillRef.current.value)} variant='text'>ADD</Button>

                </div>
                
                <h5>Added Skills :</h5>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  
                {
                  resumeDetails.userSkills?.length>0?
                  resumeDetails.userSkills?.map((skill,index)=>(
                    <Button key={index} variant="contained" className='m-1'>{skill}<ImCross
                    onClick={()=>removeSkill(skill)} className='ms-2'/></Button>
                  ))
                  :<p classNamefw-bolder>no skills are added yet!!!!</p>
                
                }
                  
                    
                </div>
            </div>
                                    {/* Summary */}
                                    <div>
                                                    <h4>Summary</h4>
                                                    <div className="p-2 row">
                                                      <TextField onChange={e=>SetResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="Write a short summary of yourself" 
                                                      variant="standard" multiline rows={7} defaultValue={'A MERN Stack Developer excels in building dynamic web applications using MongoDB, Express.js, React, and Node.js. Highlight skills like full-stack development, RESTful API integration, and responsive design. Showcase accomplishments with quantifiable results, such as improved performance or user engagement. Use clear, concise bullet points for easy readability.'}/>
                                                    </div>
                                                </div>

     {/* button for update */}

     <button className='btn btn-success text-light'>Update</button>

          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
