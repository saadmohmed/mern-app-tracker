import React , {Component} from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';
export default class CreateExercises extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
        username : '',
            desc : '',
            duration :'',
            date : new Date(),
            users : [],
        }
       
    }
    onChangeUsername(e){
        this.setState({
            username : e.target.value
        })
    }
    onChangeDescription(e){
        this.setState({
            desc : e.target.value
        })
    }
    onChangeDuration(e){
        this.setState({
            duration : e.target.value
        })
    }
    onChangeDate(date){
        this.setState({
            date : date
        })
    }
    onSubmit(e){
        e.preventDefault();
        const excersise = {
            username : this.state.username,
            description :this.state.desc,
            duration : this.state.duration,
            date :this.state.date
            
        }
        axios.post("http://localhost:8000/exercise/add" , excersise)
        .then(res=>{console.log(res.data)})
        
        console.log(excersise);
        
    }
    componentDidMount(){
        axios.get("http://localhost:8000/users/")
        .then(res=>{this.setState({users : res.data.map(user=> user.username ),username : res.data[0].username});});
        
    }
   render(){
       return (
    
           <div>
            <h3>Create Exercises</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username </label>
                      <select onChange={this.onChangeUsername} value={this.state.username} className="form-control">
                              {
                                  this.state.users.map(function(user){
                                      return <option value={user} key={user}>
                                          {user}
                                      </option>
                                  })
                              }
                      </select>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" onChange={this.onChangeDescription} value={this.state.desc}></textarea>
                </div>

                <div className="form-group">
                    <label>duration</label>
                    <input type="text" className="form-control" onChange={this.onChangeDuration} value={this.state.duration} />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <div>
                    <DatePicker
                    selected = {this.state.date}
                    onChange = {this.state.onChangeDate}
                   />
                    </div>
                   
                </div>
                <div className="form-group">
               
                    <input type="submit" className="form-control" />
                </div>
            </form>
           </div>
       )
   }
}