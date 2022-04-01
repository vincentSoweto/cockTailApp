import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import RandomCocktail from './components/randomCocktail';

export const ThemeContext = React.createContext(null);

const  App=() => {

  const { theme, setTheme} = usesState('light');
  const themeStyle = theme === 'light' ? lightTheme : darkTheme;
  
  return (
    //  <ThemeProvider theme={themeStyle}>
    <RandomCocktail/>
    //  </ThemeProvider>
 
  );
}

export default App;
