import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Login = () => {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const registerName = (text) => {
        console.log(text);
        setUsername(text)
    }

    const registerPassword = (text) => {
        setPassword(text)
    }



    const login = () => {
        if (username.length === 0 || password.length === 0) {
            return
        }
        console.log("logging in");
        localStorage.setItem("user", true)
        console.log(localStorage.getItem("user"));
    }

  return (
        <>
        <Navbar />
            <div class="hero min-h-screen bg-base-200 flex flex-row items-center justify-center">
                <div class="hero-content flex-col w-8/12">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" class="input input-bordered" onChange={(e) => registerName(e.target.value)} />
                            </div>
                            <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" onChange={(e) => registerPassword(e.target.value)} />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div class="form-control mt-6">
                        <button class="btn btn-primary" onClick={() => {login()}}>Login</button>
                        </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login