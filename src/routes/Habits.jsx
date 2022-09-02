import React, { useEffect, useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContext'
const Habits = () => {
    const value = useContext(UserContext)

    const [modalOpen, setModalOpen] = useState(false)

    const [habits, setHabits] = useState([{name: "1", content: "asd"},{name: "2", content: "asd"},{name: "1", content: "asd"},{name: "2", content: "asd"}])
    const [finishedHabits, setFinishedHabits] = useState([{name: "finished1", content: "asd"},{name: "finished2", content: "asd"},])
    const [nickname, setNickname] = useState("")
    const [content, setContent] = useState("")
    const [date, setDate] = useState("")
    const [streak, setStreak] = useState(0)

    const [showToast, setShowToast] = useState(false)

    const popElement = (index) => {
        let shallow_habits = habits
        shallow_habits.splice(index, 1)
        setHabits([...shallow_habits])
    }

    const finishHabit = (index) => {
      setFinishedHabits([...finishedHabits, ...habits.splice(index, 1)])      
    }

    const addElement = (name, content) => {
      setShowToast(true)
      setHabits([...habits, {name, content}])
      setTimeout(() => {
        setShowToast(false)
      }, 1000)
    }

    const changeNick = (text) => {
      setNickname(text)
    }

    const changeContent = (text) => {
      setContent(text)
    }
    
    useEffect(() => {
      if (habits.length === 0) {
        setStreak(val => val += 1)
      }
    }, [finishedHabits])

  return (
    <>
    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative h-80 flex flex-col items-center justify-between" for="">
            <h3 class="text-lg font-bold">Add a new habit to your tracker</h3>
            <input type="text" placeholder="Nickname" class="input input-bordered w-full max-w-xs" onChange={(e) => {changeNick(e.target.value)}} />            
            <input type="text" placeholder="Content" class="input input-bordered w-full max-w-xs" onChange={(e) => {changeContent(e.target.value)}}/>     
            <div class="modal-action">
              <label for="my-modal-4" class="btn btn-primary" onClick={() => addElement(nickname, content)}>Save!</label>
            </div>         
        </label>
      </label>
    <body>
    <div>
        <Navbar streak={value} />
        <div className='flex flex-col justify-start items-center gap-10 h-auto min-h-screen'>
        {habits.map((habit, index) => { return (
            
                                            
                  <div class={index === 0 ? ["card w-8/12 bg-base-100 shadow-xl h-72 mt-10"] : index + 1 === habits.length ? ["card w-8/12 bg-base-100 shadow-xl h-72 mb-10"] : ["card w-8/12 bg-base-100 shadow-xl h-72"]}>
                    <div class="card-body">
                    <h2 class="card-title">{habit.name}</h2>
                    <p>{habit.content}</p>
                    <div >
                      <div class="card-actions flex justify-between items-center">
                        <button onClick={() => popElement(index)} class="btn btn-error">DELETE</button>
                        <button class="btn btn-circle btn-outline btn-primary" onClick={() => {finishHabit(index)}}>
                          ✓
                        </button>
                      </div>
                    </div>
                    </div>
                  </div>

        )})}
        {finishedHabits.map((habit, index) => { return (
            <div class={index === 0 ? ["card w-8/12 bg-base-100 shadow-xl h-72 mt-10"] : index + 1 === finishedHabits.length ? ["card w-8/12 bg-base-100 shadow-xl h-72 mb-10"] : ["card w-8/12 bg-base-100 shadow-xl h-72"]}>
            <div class="card-body">
              <h2 class="card-title">{habit.name}</h2>
              <p>{habit.content}</p>
              <div >
                <div class="card-actions flex justify-between items-center">
                  <button className='btn btn-success btn-circle'>✓</button>
                </div>

              </div>
            </div>
          </div>
        )})}
        </div>
          <div className='flex align-center justify-center fixed bottom-10 w-full'>
            <div class="tooltip tooltip-info" data-tip="Add a new self-made habit to your list of habits. Habit does not increase score significantly">
              <label for="my-modal-4" class="btn modal-button btn-primary text-xl rounded-full flex items-center justify-center">+</label>
            </div>
          </div>

        
        <Footer />
    </div>
    {showToast 
    ?
     <div class="toast">
      <div class="alert alert-info">
        <div>
          <span>Created new habit</span>
        </div>
      </div>
    </div> 
    : 
    <></>}
    </body>
    <Outlet />
    </>
  )
}

export default Habits