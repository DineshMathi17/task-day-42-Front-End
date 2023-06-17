import './App.css';
import React from 'react';
import StudentComponent from './student/Studentcomponent';
import { AddStudent } from './student/Addstudent';
import { EditStudent } from './student/Editstudent';
import { DetailsStudent } from './student/StudentDetails';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';



function App() {
  
  return (
    <div className="App">   
        <Switch>

          <Route exact path="/">
            <StudentComponent />
          </Route>
          <Route path="/add">
            <AddStudent/>
              </Route>

          <Route path="/student/edit/:id">
            <EditStudent/>
          </Route>

          <Route path="/student/view/:id">
            <DetailsStudent />
          </Route>

          </Switch>
    </div>
  );
}

export default App;
