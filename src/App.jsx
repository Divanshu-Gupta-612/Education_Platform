import { useState } from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import CourseDetails from './components/Course Details/courseDetails'
import Login from './components/Login/login'
import SignIn from './components/SignIn/signIn'
import Shop from './components/Shop/shop'
import Courses from './components/Courses/courses'
import CoursesPricing from './components/Courses Pricing/coursesPricing'
import JoinAsTeacher from './components/Join As Teacher/joinAsTeacher'
import Mentors from './components/Mentors/mentors'
import MentorDetails from './components/Mentor Details/mentorDetails'

function App() {
  return (
    <div className=' h-[100vh] flex flex-col justify-between overflow-auto bg-gray-100'>
      <Header />
      {/* <CourseDetails/> */}
      {/* <Login /> */}
      {/* <SignIn/>   */}
      {/* <Shop /> */}
      {/* <Courses /> */}
      {/* <CoursesPricing /> */}
      {/* <JoinAsTeacher /> */}
      {/* <Mentors /> */}
      <MentorDetails />
      <Footer />
    </div>
  )
}

export default App
