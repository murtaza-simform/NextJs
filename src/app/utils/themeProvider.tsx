"use client";
import {  createContext, ReactNode, useContext } from "react";

interface Theme{
    color:{
        primary: string,
        secondary: string
    }
}

const defaultTheme: Theme = {
    color:{
        primary: "#6200EE",
        secondary: "#018786"
    }
}

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);