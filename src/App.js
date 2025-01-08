import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
// import './accordion.css';
import Router from './routes/index'
import SearchableList from './TaskComponent/SearchableList';
import Counter from './TaskComponent/Counter';
import Accordion from './TaskComponent/Accordion';
import { 
    ThemeConsumer, 
    ThemeContextProvider } from './TaskComponent/Theme/ThemeContext';
import HeaderTheme from './TaskComponent/Theme/HeaderTheme';
// import {Task} from './Task'

const App = () => {
const {theme ,isDarkMode}= ThemeConsumer()

  return (
  //   <ThemeContextProvider> 
  //   <HeaderTheme/>
  // <SearchableList/>
  // <Counter/>
  // <Accordion/> 
  // </ThemeContextProvider>
  <Router/>
  // <Task/>
  )
}

export default App