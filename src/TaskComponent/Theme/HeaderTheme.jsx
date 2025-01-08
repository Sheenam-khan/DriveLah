import React from 'react'
import { ThemeConsumer } from './ThemeContext'

const HeaderTheme = () => {
    const {isDarkMode,handleThemeChange}=ThemeConsumer()
  return (
    <nav>
        <h1>HeaderTheme</h1>
    <input type='checkbox' onChange={handleThemeChange} value={isDarkMode}/>
    </nav>
  )
}

export default HeaderTheme