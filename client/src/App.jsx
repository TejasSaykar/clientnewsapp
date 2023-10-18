import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import News from './components/news/News'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Trending from './components/news/Trending'
import MostViewed from './components/news/MostViewed'
import CreateNews from './pages/CreateNews'
import NewsDetails from './components/news/NewsDetails'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <>
      <h1 className='font-bold text-2xl text-center'>News app for client</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/news/:id' element={<News />} />

        <Route path='/admin/create-news' element={<IsAdmin><CreateNews /></IsAdmin>} />
        <Route path='/news-details/:id' element={<NewsDetails />} />

        <Route path='/trending' element={<Trending />} />
        <Route path='/mostviewed' element={<MostViewed />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>
  )
}

export function IsAdmin(props) {
  if (localStorage.getItem("userId") === "6523bb298cd590b32f82da1d") {
    return props.children;
  } else {
    return <Navigate to={"/"} />
  }
}

export default App
