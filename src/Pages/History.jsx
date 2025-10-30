import { Box,Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
function History() {
  return (
    <div>
      <h1 className='text-center my-5'>DOWNLOADED RESUME HISTORY</h1>
      <Link to={'/resume'}className='float-end me-5' style={{marginTop:'-80px'}}>Back</Link>
      <Box component="section" className='container-fluid'>
      <div className="row">
        <div className="col-md-4">
          <Paper elevation={3} sx={{my:5}}>
          <div className="d-flex justify-content-between align-items-center">
            <h6>Review at: 10/8/2025 12:00</h6>
            <button className='btn text-danger fs-5'><MdDelete /></button>
          </div>
          <div className="border rounded p-3">
            <img width={'200px'} height={'200px'} src="https://i.pinimg.com/originals/8a/b7/31/8ab7310a5298a17c242fdf38f3aded4e.jpg" alt="resumee" />
          </div>
          </Paper>
        </div>
      </div>
    </Box>
    </div>
  )
}

export default History
