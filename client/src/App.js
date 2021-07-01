import React from 'react'
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes, Paper } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

import Home from './screens/Home/Home'
import Join from './screens/Join/JoinChatScreen'
import Chat from './screens/Chat/ChatScreen'
import Login from './screens/Login/LoginScreen'
import Register from './screens/Register/RegisterScreen'

const App = () => {

  const theme = responsiveFontSizes(
    createMuiTheme({
      typography: {
        fontFamily: '"Ubuntu"',
        color: {
          main: '#fff', 
          secondary: 'rgba(255, 255, 255, 0.7)',
          disabled: 'rgba(255, 255, 255, 0.5)'
        },
      },
      palette: {
        type: 'dark',
        primary: { main: '#424242', secondary: '#7eca9c'}, 
        secondary: { main: '#303030' },

        action: {
          selected: '#890596',
          hover: '#52006A',
          disabled: 'rgba(255, 255, 255, 0.3)'
        }
      },
    })
  )

  return (
    <>
    <MuiThemeProvider theme={theme}>
    <Paper>
      <Router>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/join-chat' component={Join} />
          <Route path='/chat' component={Chat} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
      </Router>
    </Paper>
    </MuiThemeProvider>
    </>
  );
}

export default App
