import React from 'react'
import Layout from '../components/Layout'

const Profile = () => {
  return (
    <Layout>
        <div className='h-screen flex items-center'>
        <ul class="menu bg-base-100 h-96 w-56 rounded-box flex items-start justify-between">
        <li className='w-full'><a className=' flex items-center justify-center'>Account information</a></li>
        <li class="bordered w-full"><a className=' flex items-center justify-center'>Security and friends</a></li>
        <li className='w-full '><a className=' flex items-center justify-center'>Settings</a></li>
        </ul>

        <div className='w-11/12 bg-slate-600 h-screen'></div>
        </div>
    </Layout>
  )
}

export default Profile