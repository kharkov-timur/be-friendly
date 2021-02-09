import {Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './pages/Profile/ProfileContainer'
import DialogsContainer from './pages/Dialogs/DialogsContainer'
import UsersContainer from './pages/Users/UsersContainer'
import News from './pages/News/News'
import Music from './pages/Music/Music'
import Settings from './pages/Settings/Settings'

import './App.css'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Switch>
          <Route exact
                 path='/profile'
                 render={() => <ProfileContainer />}/>
          <Route path='/messages'
                 render={() => <DialogsContainer />}/>
          <Route path='/users'
                 render={() => <UsersContainer />}/>
          <Route path='/news'
                 render={() => <News />}/>
          <Route path='/music'
                 render={() => <Music />}/>
          <Route path='/settings'
                 render={() => <Settings />}/>
        </Switch>
      </div>
    </div>
  )
}

export default App
