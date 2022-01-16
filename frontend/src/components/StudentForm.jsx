import React from 'react';
import "./styles.css";

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      id: '',
      bio: '',
      github: '',
      twitter: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);        
    this.onChange = this.onChange.bind(this);
  }

	handleChange(e) {
		this.setState({
      [e.target.name]: e.target.value
		});
	}
  onChange(e) {
    this.setState({photo:e.target.files[0]});
  }

  handleSubmit(e) {
      e.preventDefault();
      const formValues = new FormData(e.target);
      const newStudent = Object.fromEntries(formValues.entries());
          fetch('http://localhost:8080/users', {
              method: 'POST',
              body: JSON.stringify(newStudent),
              headers: {
                'Content-type': 'application/json'
              },
            }).then(function(response) {
              // console.log(response)
              alert("details submitted");
              return response.json();
            });
  }

  render() {
    return (
      <div className="auth-wrapper" >
      <form onSubmit={this.handleSubmit} className="auth-inner">
        <h1><b>Student-Form</b></h1>
        <label class>
          Full Name :
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <br />
        <label >
          Email ID :
          <input type="email" name="email" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          ID Number :
          <input type="text" name="id" onChange={this.handleChange} />
        </label>
        <br />
        <label class="bio">
          Bio : 
          <input type="textarea" name="bio" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Github:
          <input type="text" name="github" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Twitter:
          <input type="text" name="twitter" onChange={this.handleChange} />
        </label>
     <input class="formbutton" type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default StudentForm;