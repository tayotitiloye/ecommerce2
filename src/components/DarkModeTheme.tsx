'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";



function DarkModeTheme() {

    const {resolvedTheme, theme, setTheme } = useTheme()
  return (
      <div>
      <button
        className=''
              onClick={() => {
                  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
          }}
          >
          {theme === 'light' ?  <FaRegMoon /> : <FiSun /> }
          </button>
    </div>
  )
}

export default DarkModeTheme