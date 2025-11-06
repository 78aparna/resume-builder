import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { ImCross } from "react-icons/im";
import { useState } from 'react';
import { alertClasses } from '@mui/material';
import { addResumeAPI } from '../SERVICES/allAPI';
import { useNavigate } from 'react-router-dom';

const steps = ['Basic Informations', 'Contact Details', 'Educational Details','Work Experience',
    'Skills & Certifications','Review & submit'];
function View({resumeDetails,SetResumeDetails}) {
  const SkillSuggestionArray = ['Node JS','Java','Express JS','Mongo DB','Angular',
    'React JS','Leadership','Communication','Power BI']
 const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  // create state for storing resume details
  
  //reference to skill input tag
  const skillRef = React.useRef()
  const navigate = useNavigate()
  
  
  console.log(resumeDetails);
  

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
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


  const renderSteps =(stepCount)=>{
    switch(stepCount){
        case 0 : return(
            <div>
                <h4>Personal Details</h4>
            <div className="row p-3">
                <TextField value={resumeDetails.username} onChange={e=>SetResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic" label="Full Name" variant="standard" />
                <TextField value={resumeDetails.jobTitle}  onChange={e=>SetResumeDetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic" label="Job Title" variant="standard" />
                <TextField value={resumeDetails.location}  onChange={e=>SetResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic" label="Location" variant="standard" />
            </div>
            </div>
            
        )
        case 1 : return(
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
            
        )
        case 2 : return(
            <div>
               <h4>Educational Details</h4>
               <div className="row p-3">
                <TextField value={resumeDetails.course}  onChange={e=>SetResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic" label="Course Name" variant="standard" />
                <TextField value={resumeDetails.college}  onChange={e=>SetResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic" label="College Name" variant="standard" />
                <TextField value={resumeDetails.university}  onChange={e=>SetResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic" label="University" variant="standard" />
                <TextField value={resumeDetails.passoutyear}  onChange={e=>SetResumeDetails({...resumeDetails,passoutyear:e.target.value})} id="standard-basic" label="Year Of Passout" variant="standard" />
             
               </div>
                  
            </div>
            
        )
        case 3 : return(
            <div>
                <h4>Proffessional Details</h4>
                <div className="row p-3">
                <TextField value={resumeDetails.jobtype}  onChange={e=>SetResumeDetails({...resumeDetails,jobtype:e.target.value})} id="standard-basic" label="Job or internship" variant="standard" />
                <TextField value={resumeDetails.company}  onChange={e=>SetResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic" label="Company Name" variant="standard" />
                <TextField value={resumeDetails.clocation}  onChange={e=>SetResumeDetails({...resumeDetails,clocation:e.target.value})} id="standard-basic" label="Company Location" variant="standard" />
                <TextField value={resumeDetails.duration}  onChange={e=>SetResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic" label="Duration" variant="standard" />
                
                </div>
                
            </div>
        )
        case 4 : return(
            <div>
                <h4>Skills</h4>
                <div className="d-flex align-items-center justify-content-between p-3 w-100">
                  <input ref={skillRef} type="text" placeholder='Skills' className='form-control'/>
                  <Button onClick={()=>addSkill(skillRef.current.value)} variant='text'>ADD</Button>

                </div>
                <h5>Suggestions :</h5>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  {
                    SkillSuggestionArray.map((item,index)=>(
                      <Button onClick={()=>addSkill(item)} key={index} variant='outlined' className='m-1'>{item}</Button>
                    )
                    )
                  }
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
        )
        case 5 : return(
            <div>
                <h4>Summary</h4>
                <div className="p-2 row">
                  <TextField onChange={e=>SetResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="Write a short summary of yourself" 
                  variant="standard" multiline rows={7} defaultValue={'A MERN Stack Developer excels in building dynamic web applications using MongoDB, Express.js, React, and Node.js. Highlight skills like full-stack development, RESTful API integration, and responsive design. Showcase accomplishments with quantifiable results, such as improved performance or user engagement. Use clear, concise bullet points for easy readability.'}/>
                </div>
            </div>
        )
    }

  }
  const handleAddResume = async ()=>{
    const {username,jobTitle,location}=resumeDetails
    if(!username&&!jobTitle&&!location){
      alert("please fill the form completely...")
    }else{
       //api
       console.log("api call");
       try{
        const result =await addResumeAPI(resumeDetails)
        console.log(result);
        if(result.status==201){
          alert('Resume added successfully!!!!')
          const{id} = result.data
          //success redirect viewpage
          navigate(`/resume/${id}/view`)
        }
       }catch(error){
        console.log(error);
        
       }
       
    }
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* render contents according to step */}
          <Box>
             {renderSteps(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {activeStep === steps.length - 1 ? (
            
            <Button onClick={handleAddResume}>Finish</Button>
             ) : (
            
            <Button onClick={handleNext}>Next</Button>
             )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default View
