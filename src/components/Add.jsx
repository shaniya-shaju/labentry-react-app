
import axios from "axios";
import React, { useState } from "react";


const Add = () => {

    const [input,changeInput]=useState({

        name:"",
        department:"",
        sem:"",
        course:"",
        systemnumber:"",
        timein:"",
        timeout:"",
        date:""

    })

    const inputHandler=(event)=>{
        changeInput({...input,[event.target.name]:event.target.value})
    }

    const readValues=()=>{

        axios.post("http://localhost:3001/add-lab",input)
        .then((response)=>{
            alert("Added Successfully")
        })
        .catch((error)=>{
            alert("Something went wrong")
        })

    }

  return (
    <div>

       

      <div className="container mt-4">

        <div className="row justify-content-center">

          <div className="col-md-7">

            <div className="card shadow p-4">

              <h3 className="text-center mb-4">Add Lab Details</h3>

              <div className="mb-3">
                <label>Name</label>
                <input type="text" className="form-control" name="name" onChange={inputHandler}/>
              </div>

              <div className="mb-3">
                <label>Department</label>
                <input type="text" className="form-control" name="department" onChange={inputHandler}/>
              </div>

              <div className="mb-3">
                <label>Semester</label>
                <input type="text" className="form-control" name="sem" onChange={inputHandler}/>
              </div>

              <div className="mb-3">
                <label>Course</label>
                <input type="text" className="form-control" name="course" onChange={inputHandler}/>
              </div>

              <div className="mb-3">
                <label>System Number</label>
                <input type="text" className="form-control" name="systemnumber" onChange={inputHandler}/>
              </div>

              <div className="mb-3">
                <label>Time In</label>
                <input type="text" className="form-control" name="timein" onChange={inputHandler}/>
              </div>

              <div className="mb-3">
                <label>Time Out</label>
                <input type="text" className="form-control" name="timeout" onChange={inputHandler}/>
              </div>

              <div className="mb-3">
                <label>Date</label>
                <input type="text" className="form-control" name="date" onChange={inputHandler}/>
              </div>

              <button className="btn btn-primary w-100" onClick={readValues}>
                Submit
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Add;