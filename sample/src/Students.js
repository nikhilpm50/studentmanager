import React, { useContext, useEffect, useState } from 'react'
import axios from './Axios'
import { Link } from 'react-router-dom'
import { API_KEY } from './Constants/Constants'
import  {DetailContext}  from './Context/DetailContext'
import './Students.css'




function Students() {
    const [student, setStudent] = useState([])
    const { setDetails } = useContext(DetailContext)
    
    
    

    useEffect(() => {
        axios.get(`students/?api_key=${API_KEY}`).then((response) => {
            console.log(response.data)
            setStudent(response.data.students)
        })
    }, [])

    
   
    return (
        <div>
            <div className="header">

            </div>
            <div className='new_icon'>
                <Link to='/'>
            <i class="fas fa-home fa-2x"></i></Link>
            </div>
            <div>
            <h2 className="students">List of Students</h2>
                 </div>
            {student.map((obj) =>
                    <div className='det'>
                <p className='details'>{obj.name}
                               
                      <Link to='/studentdetails' style={{textDecoration:'none'}}>
                        <p  onClick={() => {
                            
                            setDetails(obj);
                            
                            }

                        }  className="details1">Details</p></Link> </p>
                       
                       
                        </div> 
                        
                       
            )
            } 
          
        </div >
    )
}

export default Students
