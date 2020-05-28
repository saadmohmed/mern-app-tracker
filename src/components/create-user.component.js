import React , {Component} from 'react';
import axios from 'axios';

export default class CreateExercises extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
        username : '',
        
            users : [],
        }
       
    }
    onChangeUsername(e){
        this.setState({
            username : e.target.value
        })
    }
   
    onSubmit(e){
        e.preventDefault();
        const user = {
            username : this.state.username,
            
        }
        axios.post('http://localhost:8000/users/add', user).then(res=>{console.log(res.data)});
        console.log(user);
        
    }
    componentDidMount(){
        this.setState({
            
            username : ""
        })
    }
   render(){
       return (
    
           <div>
            <h3>Create user</h3>
            <form onSubmit={this.onSubmit}>
            
                <div className="form-group">
                    <label>User name</label>
                    <input className="form-control" required onChange={this.onChangeUsername} value={this.state.username} />
                </div>

              
                <div className="form-group">
               
                    <input type="submit" className="form-control" />
                </div>
            </form>
           </div>
       )
   }
}