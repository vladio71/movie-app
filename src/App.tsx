import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {blueGrey,blue} from '@mui/material/colors';
import ScrollList from "./components/infiniteList/ScrollList/ScrollList";
import InfiniteList from "./components/infiniteList/InfList";



const theme = createTheme({
  palette: {
    primary: blue,
    secondary: {
      main: blueGrey[50]
    }
  },
});

const App = () => {
  return (
      <>
        <ThemeProvider theme={theme} >
          <Header/>
          <ScrollList/>
            <InfiniteList/>
        </ThemeProvider>
      </>
  );
}

export default App

