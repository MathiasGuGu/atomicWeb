import React from 'react'
import { Link, Outlet } from "react-router-dom";
const Hero = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-md">
            <h1 class="text-5xl font-bold">Welcome!</h1>
            <p class="py-6">To get started using atomic habits, go to the habits page.</p>
            <Link to="/habits">
                <button class="btn btn-primary">Go to habits page</button>
            </Link>
            </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Hero