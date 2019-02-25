import '@styles/_fonts.scss'
import 'reset-css'
import smartquotes from 'smartquotes'
import cssVars from "css-vars-ponyfill"

// IE11 CSS Vars fallback
cssVars()

// Smartquotes (at Tom D's request!)
smartquotes().listen()
