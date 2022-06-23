import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {blueGrey,blue} from '@mui/material/colors';
import ScrollList from "./components/infiniteList/ScrollList/ScrollList";
import InfiniteList from "./components/infiniteList/InfList";
import Search from "./components/infiniteList/Search/Search";



const theme = createTheme({
  palette: {
    primary: blue,
    secondary: {
      main: blueGrey[50],
    }
  },
    components:{
      MuiSelect:{
          styleOverrides:{
              select:{
                  background: "black",
                  border: '1.6px white solid',
                  outline:"none",
                  color: "white",
                   width: 250,
                  padding: '.4rem',
                  fontSize: "smaller",
                  '&:hover':{
                      outline: '1px white solid',

                  }
              },

          }
      }
    },

});

const App = () => {
   return (
      <div className={'name'}>
         <ThemeProvider theme={theme} >
          <Header/>
          <ScrollList/>
          <Search/>
        </ThemeProvider>
      </div>
  );
}

export default App

