import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class OfficerForm extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            urn :0,
            name:'',
            email:'',
            password:'',
            district:'',
            bio:'',
            errors:{}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit(e) {
        e.preventDefault();
    
      
      }

    render() {
        
        return (
            <div className="officer-profile" style={{display: 'flex', justifyContent: 'center'}}> 
               <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Name"
                  name="name"
                  value={this.state.handle}
                  onChange={this.onChange}
                />

               
                <TextFieldGroup
                  placeholder="* URN"
                  name="urn"
                  value={this.state.company}
                  onChange={this.onChange}
                />
                <TextFieldGroup
                  placeholder="* Email"
                  name="email"
                  value={this.state.company}
                  onChange={this.onChange}
                />
                 <TextFieldGroup
                  placeholder="* Password"
                  name="password"
                  value={this.state.company}
                  onChange={this.onChange}
                />
                 <TextFieldGroup
                  placeholder="District"
                  name="district"
                  value={this.state.company}
                  onChange={this.onChange}
                />
                 <TextFieldGroup
                  placeholder="Bio"
                  name="bio"
                  value={this.state.company}
                  onChange={this.onChange}
                />
                <div className="mb-3">
                  <button
                    type="button"
                   
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />

               
              </form>
            </div>
          </div>
        </div>
            </div>
        );
    }
}

export default OfficerForm;
