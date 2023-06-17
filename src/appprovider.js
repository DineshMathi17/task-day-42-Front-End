import {createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();
const AppProvider =({children})=>{
    const [student,setStudent]=useState([]);
   
    useEffect(()=>{
        const getDetails = async () => {
            try {
                const response = await fetch("https://task-day-42-backend.onrender.com/", {
                    method: "GET"
                });
                const data = await response.json()
                 console.log(data.users)
                setStudent(data.users)
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    },[])

    return(
        <AppContext.Provider
        value={{
            student,
            setStudent,
          
        }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const AppState = () =>{
    return useContext(AppContext)
}
export default AppProvider