import React from "react";
import {User} from "../../types/types.ts";
import "./RegistrationForm.css"

interface onRegistrationInterface {
    onRegistration : (user :User) => void
}
function RegistrationForm ({onRegistration} : onRegistrationInterface) {

    function handleRegistration (event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        const user : User = {
            userName : String(data.get("username")),
            password : String(data.get("password"))
        }

        onRegistration(user)
    }


    return (
        <div className="wrapper">
            <form className="container input-group" onSubmit={handleRegistration}>
                <label className="form-label" htmlFor="username">Username</label>
                <input type="text" name="username" required></input>
                <label htmlFor="password">Password</label>
                <input type="password" name="username" required></input>
                <button className="btn btn-primary" type="submit">Registration</button>
            </form>
        </div>
    )
}

export default RegistrationForm