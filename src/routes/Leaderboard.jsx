import React from 'react'
import Navbar from '../components/Navbar'

const Leaderboard = () => {

    const users = [{name: "user1", score: 50, current_streak: 10 ,max_streak: 123},{name: "user2", score: 0, current_streak: 10, max_streak: 1},{name: "user3", score: 1, current_streak: 10, max_streak: 23},]



  return (
    <div>
        <Navbar />
        <div className='flex '>
        <div class="overflow-x-auto w-screen">
            <table class="table w-full flex items-center justify-center">
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Name</th>
                        <th><button className='btn btn-ghost'>Score</button></th>
                        <th><button className='btn btn-ghost'>Current streak</button></th>
                        <th><button className='btn btn-ghost '>Max streak</button></th>
                    </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            return (
                            <tr>
                                <th>{index + 1}</th>
                                <td >{user.name}</td>
                                <td >{user.score}</td>
                                <td>{user.current_streak +  "🔥"}</td>
                                <td>{user.max_streak}</td>
                            </tr>
                            )
                        })}

                </tbody>
                
            </table>
        </div>
         
        </div>
        </div>
  )
}

export default Leaderboard