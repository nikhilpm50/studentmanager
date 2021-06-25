import React, { useContext, useEffect, useState } from 'react'
import axios from '../Axios'
import { Link } from 'react-router-dom'
import { API_KEY } from '../Constants/Constants'
import  {DetailContext}  from '../Context/DetailContext'
import './Subject.css'




function Subjects() {
    const [subject, setSubject] = useState([])
    const { setDetails } = useContext(DetailContext)


    useEffect(() => {
        axios.get(`subjects/?api_key=${API_KEY}`).then((response) => {
            console.log(response.data)
            setSubject(response.data.subjects)
        })
    }, [])

    return (
        <div>
            <div className="header">

            </div>
            <div className='newicon'>
                <Link to='/'>
            <i class="fas fa-home fa-2x"></i></Link>
            </div>
            
            <h2 className="students1">List of Subjects</h2>

            {subject.map((obj) =>
                 <div className='deta'>
                < p className='detailss' > {obj.name}
                    <Link to='/subjectdetails' style={{textDecoration:'none'}}>
                        <p className='details1' onClick={() =>
                            setDetails(obj)} > Details</p></Link>
                </p>
                   
                    </div>
            )
            }
           
        </div >
    )
}

export default Subjects