import React from 'react'
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes, Container, Paper } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

const App = () => {

  const theme = responsiveFontSizes(
    createMuiTheme({
      typography: {
        fontFamily: '"Ubuntu"',
      },
      palette: {
        type: 'dark',
        primary: { main: '#8fd9a8', secondary: '#7eca9c'}, 
        secondary: { main: '#ffffff' },
        alternate: { main: '#161616', secondary: '#393e46'},
      },
    })
  )

  return (
    <>
    <MuiThemeProvider theme={theme}>
    <Paper>
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
