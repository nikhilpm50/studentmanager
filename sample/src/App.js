import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Detailed from './Components/Detailed';
import  Details from './Context/DetailContext';
import Subjects from './Components/Subjects';
import SubjectDetails from './Components/Subjectdetails';
import Classrooms from './Components/Classrooms';
import Classroomdetails from './Components/Classroomdetails';
import Students from './Students';


function App() {
  return (
    <div className="App">
      <Details>
        <Router>
          <Switch>
            <Route path='/classroomdetails'>
              <Classroomdetails />
            </Route>
            <Route path='/classroom'>
              <Classrooms />
            </Route>
            <Route path='/subjectdetails'>
              <SubjectDetails />
            </Route>
            <Route path='/subjects'>
              <Subjects />
            </Route>
            <Route path='/studentdetails'>
              <Detailed />
            </Route>
            <Route path='/students'>
              <Students/>
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Details>

    </div >
  );
}

export default App;
