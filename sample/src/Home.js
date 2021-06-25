import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div >
            
            <div className="header">
                <div className="logo">
              <h1 className='logo'></h1></div>
            </div>
            
            <div className="icon">
                
             <i class="fas fa-user-graduate fa-7x"></i>
               
              
             <div className='sub_icon'>
                 
             <i class="fas fa-book-reader fa-7x"></i>

             </div>


             <div className='class_icon'>
                
               <i class="fas fa-chalkboard-teacher fa-7x"></i>
             </div>
            <div>  
                <Link to='/students' style={{textDecoration:'none'}}>
            <h3 className='stu_title'>Students List</h3></Link>
            </div>
            </div>
            <div>
                 <Link to='/subjects'style={{textDecoration:'none'}} >
                <h3 className="sub_title">
                    Subject List
                </h3></Link>
            </div>
            <div>
                <Link to='/classroom'style={{textDecoration:'none'}} >
                <h3 className="cla_title">Classroom List</h3></Link>
            </div>
        </div>
    )
}

export default Home
