import React, {Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import LoginContainer from './pages/Login/LoginContainer'
import ProfileContainer from './pages/Profile/ProfileContainer'
import DialogsContainer from './pages/Dialogs/DialogsContainer'
import UsersContainer from './pages/Users/UsersContainer'
import News from './pages/News/News'
import Music from './pages/Music/Music'
import Settings from './pages/Settings/Settings'
import {connect} from 'react-redux';
import {compose} from 'redux'
import {initializeApp} from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader'

import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/login'
                   render={() => <LoginContainer />} />
            <Route path='/profile/:userId?'
                   render={() => <ProfileContainer />} />
            <Route path='/messages'
                   render={() => <DialogsContainer />} />
            <Route path='/users'
                   render={() => <UsersContainer />} />
            <Route path='/news'
                   render={() => <News />} />
            <Route path='/music'
                   render={() => <Music />} />
            <Route path='/settings'
                   render={() => <Settings />} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    initialized: state.app.initialized
  })
}

const mapDispatchToProps = {
  initializeApp
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App)
