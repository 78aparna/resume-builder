Link
import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'100vh'}} className='d-flex align-items-center justify-content-center p-5 my-2 
    flex-column'>
      <img width={'40%'} src="https://i.pinimg.com/originals/79/b3/03/79b30352d4a90ff977bb0eeb5ecfddc5.gif" alt="pnf" />
      <h1>404</h1>
       <h4>Page Not Found</h4>
       <Link className='btn btn-success' to={'/'}>Go to Home</Link>

    </div>
  )
}

export default Pnf
