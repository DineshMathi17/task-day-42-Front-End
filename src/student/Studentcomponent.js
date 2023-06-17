import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";


export default function StudentComponent() {
  const { student, setStudent } = AppState();
  const history = useHistory();

  const studentDelete = async (idx) => {

    try {
      const response = await fetch(`https://task-day-42-backend.onrender.com/delete/${idx}`, {
        method: "Delete"
      })
      const data = await response.json();
      console.log(data)
      const alterList = student.filter((students) => students._id !== idx);
      setStudent(alterList)

    } catch (error) {
      console.log(error)
    }

  }



  return (
    <BaseApp
      title="Student list"
    >

      <div className="stu-com" >

        {student.map((students, idx) => (
          <div key={idx} className="stu-com2">
            {/* <p>{students._id}</p>   */}
            <h1>{students.name}</h1>
            <p>Standard: {students.standard}</p>
            <p>Email: {students.email}</p>
            <p>Age: {students.age}</p>

            <div className="btn-group">
              <button
                className="btn btn-view"
                onClick={() => history.push(`/student/view/${idx}`)}
              >View</button>

              <button
                className="btn btn-edit"
                onClick={() => history.push(`/student/edit/${students._id}`)}
              >Edit</button>

              <button
                className="btn btn-delete"
                onClick={() => studentDelete(students._id)}
              >Delete</button>
            </div>
          </div>

        ))

        }

      </div>


    </BaseApp>
  )
}