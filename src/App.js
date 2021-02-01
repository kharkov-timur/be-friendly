import {Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

import Profile from './pages/Profile/Profile'
import Dialogs from './pages/Dialogs/Dialogs'
import News from './pages/News/News'
import Music from './pages/Music/Music'
import Settings from './pages/Settings/Settings'

import './App.css'

const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/profile'>
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            </Route>
            <Route path='/messages'>
              <Dialogs
                messagePage={props.state.messagesPage}
                dispatch={props.dispatch}
              />
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
