import React from 'react'

import Preview from '../components/Preview'
import View from '../components/View'

function UserForm() {
  return (
    <div className='container'>
      <div className="row p-5">
        <div className="col-lg-6">
            <View/>  
        </div>
        <div className="col-lg-6">
               <Preview/>
        </div>
      </div>
    </div>
  )
}

export default UserForm
