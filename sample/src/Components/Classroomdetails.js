import React, { useContext, useEffect, useState } from 'react'
import { API_KEY } from '../Constants/Constants'
import  {DetailContext}  from '../Context/DetailContext'
import axios from '../Axios'
import useLocalStorage from '../hooks/UseLocalStorage'
import './Classroomdetails.css'
import {Link} from 'react-router-dom'

function Classroomdetails() {
    
    const { details } = useContext(DetailContext)
    const [add,setAdd] = useState('')
    const [change,setChange] = useState('')
    const [adds,setAdds] = useState([])
    const [changes,setChanges] = useState('')
    const [subject,setSubject]= useState([])
    const [student,setStudent] = useState([])
    const [msg,setMsg]= useState(false)
    const [msgs,setMsgs]= useState(false)
    
   function handleClick(){
        setAdds(changes);
        setMsg(true)
         
    }
    function buttonClick(){
        setAdd(change);
        setMsgs(true)
    }
    
    function deletebtn(){
        setAdds( adds !== adds)
        setMsg(false)
    }

    useEffect(() => {
        axios.get(`subjects/?api_key=${API_KEY}`).then((response) => {
            console.log(response.data)
            setSubject(response.data.subjects)
        })
    }, [])
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
            <div className="logo-cls">
             <Link to='/'>
            <i class="fas fa-home fa-2x"></i></Link>
            </div>
            <h3 className='class-det'>Classroom details</h3>
                    <div>


            <p className='details-cls'>Class Name : {details ? details.name : ''}</p>

            <p className='details-cls'> Class Layout : {details ? details.layout : ''}</p>

            <p className='details-cls'>Class Size : {details ? details.size : ""}</p>
        </div >

        <div className='ass-cls'>
            <h3>Assign a Subject</h3>
        
        <select className='sel-cls' value={change} onChange={(e)=>setChange(e.target.value)} >
            
            {subject.map((obj)=>
        <option>{obj.name} </option>)}
        </select>
        <div className='btn-div'>
        <button onClick={()=>
           change ? buttonClick() :''
        } className='btn'>Assign</button></div>
        </div>
        <div className='msgs-cls'>
        {msgs && <h4 className='assi-sub'>Assigned Subject is :</h4>}</div>
        <div className="sub-cls">
         <p > {add} </p>
         </div>

         <div className='assi-cls'>
            <h3>Assign a Student</h3>
        
        <select className='sel-cls' value={changes} onChange={(e)=>setChanges(e.target.value)} >
            
            {student.map((obj)=>
        <option>{obj.name} </option>)}
        </select>
        <div className='btn-div'>
        <button onClick={()=> 

           changes ? handleClick() : ''
            
            } className='btn'>Assign</button></div>
        </div>
       
            
        <div className='msg-cls'>
           {msg && <h4>Assigned Student is :</h4>}</div>
           <div>
        <p className='stu-cls'>{add ? adds : '' }  </p></div>
        <div className='btn-div1'>
        {msg && <button onClick={()=>deletebtn()}  className="btn2"> Delete</button> }
        
         </div>
        
        
        </div>
        
    )
}

export default Classroomdetails