import LoginForm from "./LoginForm.tsx";
import {User} from "../../types/types.ts";
import {useNavigate} from "react-router-dom";


function LoginPage () {
    const navigate = useNavigate()


   async function loginUser (user : User) {
        const response = await fetch("/api/user/login", {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(user)
        })

        if (response.status === 200) {
            navigate("/table")
        } else {
            console.log("username or password incorrect!")
        }
    }




    return (
        <LoginForm onLogin={loginUser}/>
    )
}

export default LoginPage