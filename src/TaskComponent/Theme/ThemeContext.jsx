import { useContext, useState ,createContext, useEffect} from "react"

const ThemeContext=createContext({
    isDarkMode:false,
    theme:'light',
    handleThemeChange:()=>{},
})
const ThemeContextProvider= ({children})=>{
    const [isDarkMode, setisDarkMode] = useState(false)
    const handleThemeChange =()=>setisDarkMode(prev=>!prev)
    const theme = isDarkMode?'dark':'light'
    useEffect(()=>{
        document?.documentElement?.setAttribute('data-theme', theme)
    },[isDarkMode])
    return <ThemeContext.Provider value={{isDarkMode,handleThemeChange ,theme}}>{children}</ThemeContext.Provider>
}
const ThemeConsumer=()=>{
    return useContext(ThemeContext)
}

export {ThemeContext,ThemeContextProvider,
    ThemeConsumer
 }