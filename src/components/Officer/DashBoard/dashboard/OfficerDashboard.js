import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import axios from 'axios';

class OfficerDashboard extends Component {
  constructor(props)
  {
    super(props);
    this.state ={
        pdfFile:'',
        fileType:'application/pdf',
        pdfFileError:''
        
    };
    this.handlePdfFileChange=this.handlePdfFileChange.bind(this);
    this.handlePdfFileSubmit= this.handlePdfFileSubmit.bind(this);
  }
  handlePdfFileChange=(e)=>{
    let selectedFile=e.target.files[0];
    if(selectedFile){
      if(selectedFile){
        let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = (e) =>{
              this.setState({pdfFile:selectedFile});
              this.setState({pdfFileError:''})
            }
      }
      else{
        this.setState({pdfFile:null});
              this.setState({pdfFileError:'Please select valid pdf file'})
        
      }
    }
    else{
      console.log('select your file');
    }
  }

  handlePdfFileSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData() 
    data.append('file', this.state.pdfFile)
   // console.warn(this.state.pdfFile);
    axios.post("http://localhost:5000/upload", data, { // receive two parameter endpoint url ,form data 
    })
    .then(res => { // then print response status
        console.warn(res);
    })
  }
    render() {
        return (
          <>
            <Navbar />
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">FIR</h1>
                  <p className="lead text-center">
                    Please provide FIR details
                  </p>
                  <form
                    className="form-group"
                    onSubmit={this.handlePdfFileSubmit}
                  >
                    <input
                      type="file"
                      className="form-control"
                      required
                      onChange={this.handlePdfFileChange}
                    />
                    {this.pdfFileError && (
                      <div className="error-msg">{this.pdfFileError}</div>
                    )}
                    <br></br>
                    <button type="submit" className="btn btn-success btn-lg">
                      UPLOAD
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        );
    }
}

export default OfficerDashboard;
