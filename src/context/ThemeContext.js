import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const[darkTheme, setDarkTheme] = useState (false)

    return(
        <ThemeContext.Provider value={darkTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext }
export default ThemeProvider