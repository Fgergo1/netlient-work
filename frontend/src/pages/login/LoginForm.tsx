import {User} from "../../types/types.ts";
import React from "react";
import "./LoginForm.css"

interface onLoginInterface {
    onLogin: (user: User) => void
    error : boolean
}

function LoginForm({onLogin, error}: onLoginInterface) {

    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        const user : User = {
            userName : String(data.get("username")),
            password : String(data.get("password"))
        }

        onLogin(user)
    }


    return (
        <div className="wrapper">
            <form className="container input-group" onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" required></input>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required></input>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            {error && <div className="alert alert-danger" role="alert">
                Username or password is invalid!
            </div>}
        </div>

    )
}

export default LoginForm