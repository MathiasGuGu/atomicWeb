import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const Habits = () => {

    const [habits, setHabits] = useState([{name: "1", content: "asd"},{name: "2", content: "asd"},{name: "3", content: "asd"},{name: "1", content: "asd"},{name: "2", content: "asd"},{name: "3", content: "asd"},])

    const popElement = (index) => {
        let shallow_habits = habits
        shallow_habits.splice(index, 1)
        setHabits([...shallow_habits])
    }

  return (
    <div>
        <Navbar />
        <div className='flex justify-center items-center gap-10 flex-wrap h-screen'>
        {habits.map((habit, index) => { return (
            <div class="card w-72 bg-base-100 shadow-xl h-72">
            <div class="card-body">
              <h2 class="card-title">{habit.name}</h2>
              <p>{habit.content}</p>
              <div class="card-actions justify-end">
                <button onClick={() => popElement(index)} class="btn btn-error">DELETE</button>
              </div>
            </div>
          </div>
        )})}
        </div>
        <Footer />
    </div>
  )
}

export default Habits