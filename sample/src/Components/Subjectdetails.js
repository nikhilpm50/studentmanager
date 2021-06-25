import React, { useContext } from 'react'
import  {DetailContext}  from '../Context/DetailContext' 
import {Link} from 'react-router-dom'




function SubjectDetails() {
    
    const {details} = useContext(DetailContext)
  
   




    return (
        <div className='modal-wrapper'>
        <div className="modal-header">
          <p>Subject Info</p>
          
        </div>

           <div className='content'>
            <p>Subject :{details ? details.name : ''}</p>

            <p> Tutor   :{details ? details.teacher : ''}</p>
            </div>
            <div className="modal-footer">
        <Link to='/subjects' style={{textDecoration:'none'}}>
        <button className='modal-close-btn'>Back</button>
        </Link>
      </div>
           
        </div >
    )
}

export default SubjectDetails