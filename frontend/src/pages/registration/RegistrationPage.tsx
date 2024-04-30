import RegistrationForm from "./RegistrationForm.tsx";
import {User} from "../../types/types.ts";
import {useNavigate} from "react-router-dom"

function RegistrationPage () {

    const navigate = useNavigate()

   async function registerUser (user: User) {
        const response = await fetch("/api/user/registration", {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(user)
        })

        if (response.status === 200) {
            navigate("/login")
        } else {
            console.log("username or password incorrect!")
        }
    }


    return (
        <RegistrationForm onRegistration={registerUser}/>
    )
}

export default RegistrationPage