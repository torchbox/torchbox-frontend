// Vendor Modules
import React from 'react'
import propTypes from 'prop-types'
// Utils
import getTheme from './themes'

const ThemeProvider = ({ children, theme = 'light' }) => {
  const themeVars = getTheme(theme)
  const themeStyles = Object.keys(themeVars)
    .map(key => `--${key}: ${themeVars[key]}; `)
    .reduce((style1, style2) => style1 + style2)

  return (
    <>
      <style>
        {`:root {
                    ${themeStyles}
                }`}
      </style>
      {children}
    </>
  )
}

ThemeProvider.propTypes = {
  children: propTypes.element,
  theme: propTypes.string,
}

export default ThemeProvider
