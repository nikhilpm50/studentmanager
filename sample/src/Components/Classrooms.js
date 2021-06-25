import React, { useContext, useEffect, useState } from 'react'
import axios from '../Axios'
import { Link } from 'react-router-dom'
import { API_KEY } from '../Constants/Constants'
import  {DetailContext}  from '../Context/DetailContext'
import './Classrooms.css'



function Classrooms() {
    const [classroom, setClassroom] = useState([])
    const { setDetails } = useContext(DetailContext)


    useEffect(() => {
        axios.get(`classrooms/?api_key=${API_KEY}`).then((response) => {
            console.log(response.data)
            setClassroom(response.data.classrooms)
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
            <h2 className="students1">List of Classroom</h2>

            {classroom.map((obj) =>
                  <div className="deta">
                < p className='detailss' > {obj.name}
                    <Link to='/classroomdetails' style={{textDecoration:'none'}}>
                        <p className='details1' onClick={() => {
                            setDetails(obj)
                        }} >Details</p></Link>

                </p></div>
            )
            }

        </div >
    )
}

export default Classrooms