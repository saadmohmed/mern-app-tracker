import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render(){
        return (
            
            <div className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">ExcerTracker</Link>
                <div className="collapse navbar-collapse">
                          <ul className="navbar-nav mr-auto">
                              <li className="navbar-item">
                              <Link to="/" className="navbar-brand">Excersises</Link>
                              </li>
                              <li className="navbar-item">
                              <Link to="/create" className="navbar-brand">Create Excersises log</Link>
                              </li>
                            
                              <li className="navbar-item">
                              <Link to="/user" className="navbar-brand">Create user</Link>
                              </li>
                          </ul>
                </div>
            </div>
        )
    }
}