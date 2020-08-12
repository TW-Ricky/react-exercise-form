import React, {Component} from 'react';
import './myProfile.less';
import 'bootstrap/dist/css/bootstrap.css'

class MyProfile extends Component {
    state = {
        name: '',
        gender: 'male',
        description: '',
        conduct: false,
    }
    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }
    handleGenderChange = event => {
        this.setState({
            gender: event.target.value
        })
    }
    handleDescriptionChange = event => {
        this.setState({
            description: event.target.value
        })
    }
    handleConductChange = event => {
        this.setState({
            conduct: !this.state.conduct
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return <form className = 'form'  onSubmit = {this.handleSubmit}>
            <h1>My Profile</h1>
            <div className = 'form-group'>
                <label htmlFor = 'name'><h4>Name</h4></label>
                <input className = 'form-control' id = 'name' value = {this.state.name} onChange = {this.handleNameChange} placeholder = 'Your name'/>
            </div>
            <div className = 'form-group'>
                <label htmlFor = 'gender'><h4>Gender</h4></label>
                <select className = 'form-control' value = {this.state.gender} onChange = {this.handleGenderChange}>
                    <option value = 'male'>Male</option>
                    <option value = 'female'>Female</option>
                </select>
            </div>
            <div className = 'form-group'>
                <label htmlFor = 'description'><h4>Description</h4></label>
                <textarea 
                    className = 'form-control' 
                    id = 'description' 
                    rows = '6' 
                    value = {this.state.description} 
                    onChange = {this.handleDescriptionChange} 
                    placeholder = 'Description about yourself'/>
            </div>
    
            <div className = "form-group form-check">
                <input className = "check-conduct form-check-input" type = "checkbox" checked = {this.state.conduct} id = "conduct" onChange = {this.handleConductChange}/>
                <label className = "check-text form-check-label" htmlFor = "conduct">
                    I have read the terms of conduct
                </label>
            </div>
            <div className = 'form-group form-submit'>
                <button type = 'submit' className="submit btn btn-primary btn-lg" 
                    disabled = {!this.state.name || !this.state.description || !this.state.gender || !this.state.conduct}>
                    Submit
                </button>
            </div>
        </form>
    }
  
}

export default MyProfile;