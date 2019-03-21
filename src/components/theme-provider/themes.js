// Color vars are in ./src/styles/_vars.scss
export const lightTheme = {
  // Base Colors
  'color-primary': 'var(--color-blue)',
  'color-accent': 'var(--color-coral)',
  'color-accent-small': 'var(--color-coral-dark)',


  // Hero Component
  'hero-background': 'white',
  'hero-title-color': 'var(--color-primary)',
  'hero-link-color': 'var(--color-light-blue)',

  // Header Component
  'header-background': 'white',
  'header-link-color': 'var(--color-primary)',
  'header-logo-color': 'var(--color-primary)',
  'header-icon-color': 'var(--color-accent)',
  'header-nested-link-color': 'var(--color-light-blue)',

  // Links
  'color-link': 'var(--color-light-blue)',
  'color-link-hover': 'var(--color-light-blue)',
  'color-link-badge': 'white',

  // Page section title
  'page-section-title-color': 'var(--color-coral)',

  // Phone number
  'contact-phone-number-color': 'var(--color-coral)',

  // Get in touch numbers
  'get-in-touch-number-color': 'white',
}

export const darkTheme = {
  // Base colors:
  'color-primary': 'var(--color-blue)',
  'color-accent': 'var(--color-green)',
  'color-accent-small': 'var(--color-dark-blue)',

  // Hero Component
  'hero-background': 'var(--color-primary)',
  'hero-title-color': 'white',
  'hero-link-color': 'white',

  // Header Component
  'header-background': 'var(--color-primary)',
  'header-link-color': 'white',
  'header-logo-color': 'white',
  'header-icon-color': 'white',
  'header-nested-link-color': 'white',

  // Links
  'color-link': 'var(--color-primary)',
  'color-link-hover': 'white',
  'color-link-badge': 'var(--color-primary)',

  // Page section title
  'page-section-title-color': 'var(--color-dark-blue)',

  // Phone number
  'contact-phone-number-color': 'var(--color-light-blue)',

  // Get in touch numbers
  'get-in-touch-number-color': 'var(--color-blue)',
}

export const darkThemeTransparent = {
  ...darkTheme,
  'header-background': 'transparent',
}

export const getTheme = theme =>
  ({
    light: lightTheme,
    dark: darkTheme,
    'dark--transparent': darkThemeTransparent,
  }[theme || 'light'])

export default getTheme
