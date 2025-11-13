import React, { useEffect, useState } from 'react'
import Preview from '../components/Preview'
import { Link, useParams } from 'react-router-dom';
import { addHistoryAPI, getResumeAPI } from '../SERVICES/allAPI';
import { FaFileDownload } from "react-icons/fa";

import { IoRefresh } from "react-icons/io5";
import { FaBackward } from "react-icons/fa";
import Edit from '../components/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function ViewResume() {
  const {id} = useParams()
  console.log(id);
  const[resume,setResume] = useState({})

  useEffect(()=>{
    getResumeDetails();
  },[])

  const getResumeDetails = async ()=>{
    const result = await getResumeAPI(id)
    console.log(result);
    if(result.status==200){
      setResume(result.data)
    }
    
  }
  const handleDownloadResume=async()=>{
    //create pdf document
    const doc = new jsPDF();
    const preview = document.getElementById("preview")
    //screenshot of preview-html2canvas
    const canvas = await html2canvas(preview,{scale:2})
    //console.log(canvas);
    //convert canvas to image
    const resumeImg = canvas.toDataURL('image/png')
    console.log(resumeImg);
    //add screenshot to pdf
    const pageWidth = doc.internal.pageSize.getWidth()
    //const imgHeight = doc.internal.pageSize.getHeight()
    const imgWidth = pageWidth-20
    const imgHeight = canvas.height*imgWidth/canvas.width
    doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHeight)
    //dwnld pdf
    doc.save(`resume.pdf`)
    //local time data = new data
    const localTimeData= new Date()
   // console.log(localTimeData);
   const timeStamp = `${localTimeData.toLocaleDateString()},${localTimeData.toLocaleTimeString()}`
   //console.log(timeStamp);
   try{
    await addHistoryAPI({timeStamp,resumeImg})
   }catch(err){
    console.log(err);
    
   }
   
    


  }
  return (
    <>
       <div className="container my-5">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 col-12">
              <div className="d-flex justify-content-center align-items-center mt-5">
                <button onClick={handleDownloadResume} className='btn fs-4 text-primary'><FaFileDownload/></button>
                <Edit resumeDetails={resume} SetResumeDetails={setResume} />
                <Link to={'/history'} className='btn fs-4 text-primary'><IoRefresh/></Link>
                <Link to={'/resume'} className='btn fs-4 text-success'><FaBackward/></Link>

              </div>
                <div id='preview'><Preview resumeDetails=
                {resume}/></div>
            </div>
            <div className="col-md-2"></div>
        </div>
      </div>
      
    </>
  )
}

export default ViewResume
