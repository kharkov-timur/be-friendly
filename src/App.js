import {Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './pages/Profile/Profile'
import News from './pages/News/News'
import Music from './pages/Music/Music'
import Settings from './pages/Settings/Settings'
import DialogsContainer from './pages/Dialogs/DialogsContainer'

import './App.css'

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Switch>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/messages'>
            <DialogsContainer />
          </Route>
          <Route path='/news'>
            <News />
          </Route>
          <Route path='/music'>
            <Music />
          </Route>
          <Route path='/settings'>
            <Settings />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
