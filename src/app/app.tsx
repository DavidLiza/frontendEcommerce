import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Home } from '@link-tic/pages/home/home';
import { User } from '@link-tic/pages/user/user'

const COMMON_THEME = createTheme({
  typography: {
    fontFamily: [
      'Jost',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  spacing: [0, 4, 8, 16, 32, 64],
  palette: {
    primary: {
      main: '#ff841c',
      contrastText: '#fff',
    },
    secondary: {
      main: '#1e2022',
    },
    grey: {
      '400': '#bdbdbd',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#000',
      secondary: '#ff841c',
    },
    background: {
      default: '#fff',
    }
  },
});


export function App() {
  return (
    <ThemeProvider theme={COMMON_THEME}>

      <CssBaseline/>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>

    </ThemeProvider>
  );
}

export default App;
