import React, { useContext, useEffect } from 'react'
import {DetailContext} from '../Context/DetailContext'
import './Detailed.css'
import {Link} from 'react-router-dom'

function Detailed(props) {
  const { details } = useContext(DetailContext)

 


  return  (
    <div className='modal-wrapper'>
      <div className="modal-header">
        <p>Student Info</p>
        
      </div>

       <div className='content'>
      <p>Name : {details ? details.name : ''}</p>

      <p> Age : {details ? details.age : ''}</p>

      <p>Email : {details ? details.email : ""}</p>

      </div>

      <div className="modal-footer">
        <Link to='/students' style={{textDecoration:'none'}}>
        <button className='modal-close-btn'>Back</button>
        </Link>
      </div>
    </div >
  ) 
}

export default Detailed
