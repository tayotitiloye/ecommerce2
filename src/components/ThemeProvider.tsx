"use client"

import { ThemeProvider } from "next-themes"


interface Props{
    children: React.ReactNode
}

const ThemeProviders = (props: Props) => {
    
  return (

      <ThemeProvider defaultTheme='system' attribute='class'>
          {props.children}
        </ThemeProvider>
        
      
    )
}

export default ThemeProviders

