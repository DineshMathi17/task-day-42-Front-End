import { useEffect, useState }  from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";
import { Button, TextField } from "@mui/material";


export function EditStudent() {

    const history = useHistory();

    const { student, setStudent } = AppState();

    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [standard, setStandard] = useState("");


    const { id } = useParams();
    const selectedStudent = student.find((stu) => stu._id === id);


    useEffect(() => {
        setIdx(selectedStudent._id)
        setName(selectedStudent.name)
        setEmail(selectedStudent.email)
        setAge(selectedStudent.age)
        setStandard(selectedStudent.standard)

    }, []);

    const updateStudent = async () => {
        const editindex = student.findIndex(stu => stu._id === id);
        const editedData = {
            _id:idx,
            name,
            email,
            age,
            standard,

        }
        try {
            const response = await fetch(`https://task-day-42-backend.onrender.com/updated/${idx}`, {
                method: "PUT",
                body: JSON.stringify(editedData),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await response.json();
            console.log(data)
            student[editindex] = data;
            setStudent([...student]);
            history.push("/")
        } catch (error) {
            console.log(Error)
        }

}

return (
    <BaseApp
        title=" Edit Student Data"
    >


        <div className="text-areas">

            <TextField
                id="fullwidth"
                label="id"
                variant="outlined"
                value={idx}
                onChange={(event) => setIdx(event.target.value)}
            />


            <TextField
                id="fullwidth"
                label="name"
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)} />

            <TextField
                id="fullwidth"
                label="email"
                variant="outlined"
                value={email}
                onChange={(event) => setEmail(event.target.value)} />


            <TextField
                id="fullwidth"
                label="age"
                variant="outlined"
                value={age}
                onChange={(event) => setAge(event.target.value)} />

            <TextField
                id="fullwidth"
                label="standard"
                variant="outlined"
                value={standard}
                onChange={(event) => setStandard(event.target.value)} />

            <Button
                variant="contained"
                color="success"
                onClick={updateStudent}>
                Edit
            </Button>

        </div>

    </BaseApp>
)
}