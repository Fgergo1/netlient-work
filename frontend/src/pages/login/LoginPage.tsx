import LoginForm from "./LoginForm.tsx";
import {User} from "../../types/types.ts";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


function LoginPage () {
    const [error, setError] = useState<boolean>(false)
    const navigate = useNavigate()

    function handlePopupError () {
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 5000)
    }


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
           handlePopupError()
        }
    }




    return (
        <LoginForm error={error} onLogin={loginUser}/>
    )
}

export default LoginPage