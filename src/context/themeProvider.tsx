// "use client"

// import React, { createContext, useContext, useEffect, useState } from "react";
// interface ThemeContextType {
//     mode:string;
//     setmode:(mode:string)=>void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
//     const [mode, setmode]= useState('');
//     const handleThemeChange = ()=>{
//         if (mode === 'dark') {
//             setmode('light');
//             document.documentElement.classList.add('light');
//         }else{
//             setmode('dark');
//             document.documentElement.classList.add('dark');
//         }
//     }
//     useEffect(()=>{
//         handleThemeChange();
//     },[mode])
//     return (
//         <ThemeContext.Provider value={{mode, setmode}}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// export const useTheme = ()=>{
//     const context = useContext(ThemeContext);
//     if (context === undefined) {
//         throw new Error('useTheme must be used within a ThemeProvider')
//     }
//     return context;
// }