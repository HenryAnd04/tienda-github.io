import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('Light')
    const values = {theme, setTheme}
    return (
        <ThemeContext.Provider values={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider};
export default ThemeContext;