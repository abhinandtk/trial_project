'use client'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../styles/body.css";
import { useState } from "react";

function Mainbody() {
  const [state, setState] = useState([{ task: '', status: '' }]);

  const inputChange = (event, index) => {
    const { value } = event.target;
    const updatedState = [...state];
    updatedState[index] = { ...updatedState[index], task: value };
    setState(updatedState);
  }

  const Addmethod = () => {
    setState([...state, { task: '', status: '' }]);
  }

  const inputcheck = (event, index) => {
    const { value } = event.target;
    const updatedState = [...state];
    updatedState[index] = { ...updatedState[index], status: value };
    setState(updatedState);
  }
  const deleteMethod=(index)=>{
    const updatestate=[...state]
    updatestate.splice(index,1)
    setState(updatestate)

  }
  const submit=()=>{
   if (!state.every(value => value.status)) {
      // All tasks have status values, you can proceed with your logic
      console.log("some status have no  values");

    }
   if (!state.every(value => value.task)) {
      // All tasks have status values, you can proceed with your logic
      console.log("some tasks have no values");
    }
  }
console.log(state);
  return (
    <div className="bodymain">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          {state && state?.map((value, index) => (
            <div key={index} className="task_div">
              <Form.Control
                type="text"
                name='task'
                placeholder="Enter your task"
                value={value.task}
                onChange={(event) => inputChange(event, index)}
              />
              <button type="button" onClick={Addmethod}>Add</button>
              <button type="button" onClick={()=>deleteMethod(index)}>Delete</button>
              <div>
                <Form.Check
                  type="radio"
                  name={`status${index}`}
                  value="completed"
                  onChange={(event) => inputcheck(event, index)}
                  label="completed"
                  checked={value.status === "completed"}
                />
                <Form.Check
                  type="radio"
                  name={`status${index}`}
                  value="incomplete"
                  onChange={(event) => inputcheck(event, index)}
                  label="incompleted"
                  checked={value.status === "incomplete"}
                />
              </div>
            </div>
          ))}
        </Form.Group>

        <Button variant="primary" type="button" onClick={submit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Mainbody;
