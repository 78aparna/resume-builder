import { Box,Paper } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { getHistoryAPI, removeHistoryAPI } from '../SERVICES/allAPI';
function History() {
  const [allHistory,setAllHistory] = useState([])
  console.log(allHistory);

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory =async()=>{
    try{
      const result = await getHistoryAPI()
      console.log(result);
      if(result.status==200){
        setAllHistory(result.data)
      }
      
    }catch(err){
      console.log(err);
      
    }

  }
  
  const deleteHistory = async(id)=>{
    try{
      await removeHistoryAPI(id)
      getHistory()

    }catch(err){
      console.log(err);
      
    }
  }
  return (
    <div>
      <h1 className='text-center my-5'>DOWNLOADED RESUME HISTORY</h1>
      <Link to={'/resume'}className='float-end me-5' style={{marginTop:'-80px'}}>Back</Link>
      <Box component="section" className='container-fluid'>
      <div className="row">
        {
          allHistory.length>0?
          allHistory.map(item=>(
            <div key={item?.id} className="col-md-4">
          <Paper elevation={3} sx={{my:5}}>
          <div className="d-flex justify-content-between align-items-center">
            <h6>Review at: {item?.timeStamp}</h6>
            <button onClick={()=>deleteHistory(item?.id)} className='btn text-danger fs-5'><MdDelete /></button>
          </div>
          <div className="border rounded p-3">
            <img width={'200px'} height={'200px'} src={item?.resumeImg} alt="resumee" />
          </div>
          </Paper>
        </div>
          ))
          :<p>no resumes are downloaded yet</p>
        }
      </div>
    </Box>
    </div>
  )
}

export default History
