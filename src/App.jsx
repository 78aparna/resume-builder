import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import  ResumeGenerator from './Pages/ResumeGenerator'
import UserForm from './Pages/UserForm'
import History from './Pages/History'
import Pnf from './Pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'
import ViewResume from './Pages/ViewResume'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/resume' element={<ResumeGenerator/>}/>
      <Route path='/form' element={<UserForm/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/resume/:id/view' element={<ViewResume/>}/>
      <Route path='/*' element={<Pnf/>}/>
       
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
