import React, { useState} from "react";
import './index.css';
import { url } from "../../utils/data";

const AddProject = ({  onClose,onSave}) => {

  const [projectName,setProjectName]=useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setProjectName((prevTask) => ({
  //     ...prevTask,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const data={
      method:"POST",
      headers:{
          'Content-Type':'application/json',
      },
      body:JSON.stringify({"name":projectName})
  };
    const response=await fetch(url+"/project/create",data)
    console.log(response,"allppppppppppp");
    onClose();
    onSave();
  };

  return (
    <div className="modal2">
      <div className="modal-content2">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {(
          <form onSubmit={handleSubmit}>
            <p className="taskc-header">{"Create Project"}</p>
            <hr className="custom-rule"/>
            <div className="record-format2">
              <label>Name of the Project</label>
              <input
                type="text"
                required
                name="name"
                value={projectName}
                onChange={(e)=>{setProjectName(e.target.value)}}
                placeholder="Text"
              />
            </div>
           
            <div className="controlBtns">
                <button className="cancelBtn" onClick={onClose}>
                    Cancel
                </button>
                <button type="submit" className="addBtn" >
                { "Add"}
                </button>
            </div>
           
          </form>
        )}
      </div>
    </div>
  );
};

export default AddProject;
