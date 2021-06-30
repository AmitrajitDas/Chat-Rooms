import React from 'react'
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes, Container, Paper } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

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
      <Navbar />
      <Router>
          <Route path='/' exact component={Join} />
          <Route path='/chat' component={Chat} />
      </Router>
    </Paper>
    </MuiThemeProvider>
    </>
  );
}

export default App
