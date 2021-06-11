import React , {useState, useEffect}from 'react'
import axios from 'axios';
import "./pdf.css";
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core'; // install this library
import { useParams } from 'react-router';


const ViewReports  =(props)=> {
   
    const [pdf , setPdf] = useState(null);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const {id} = useParams();
    console.log(id);
    const fetchPdf =()=>{
        axios.get(`http://localhost:5000/document/${id}`)
        .then((res) => {
           console.log(res.data);
           let result = res.data;
           result.map((file) =>(
                console.log(file.docs)
           )

           )
          
         
        })
        .catch(error => console.error(`error: ${error}`));
    }
   
 
    useEffect(() => {
        fetchPdf();
        
      },[]);
    return (
        <div className="pdf-container">
            {/* show pdf conditionally (if we have one)  */}
            Hello 
        {pdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={pdf}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}

      {/* if we dont have pdf or viewPdf state is null */}
      {!pdf&&<>No pdf file selected</>}
        </div>
    )
}

export default ViewReports
