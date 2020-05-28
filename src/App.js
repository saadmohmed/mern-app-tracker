import React from 'react';
import {BrowserRouter as Router , Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component';
import ExercisesList from './components/excersise-list.component';
import CreateExercises from './components/create-excersise.component';
import CreateUser from './components/create-user.component';
import Footer from './components/footer.component';
function App() {
  return (
    <div className="container">
    <Router>
       <Navbar />
       
       <br/>
     <Route path="/" exact component={ExercisesList} />
     {/* <Route path="/edit/:id"  component={EditExercises} /> */}
     <Route path="/create"  component={CreateExercises} />

      <Route path="/user"  component={CreateUser} />
      <Footer/>
    </Router>
    
   </div>
  );
}

export default App;
