// Color vars are in ./src/styles/_vars.scss
export const lightTheme = {
  // Base Colors
  'color-primary': 'var(--color-blue)',
  'color-accent': 'var(--color-coral)',
  'color-accent-small': 'var(--color-coral-dark)',

  // Hero Component
  'hero-background': 'white',
  'hero-parent-page-color':  'var(--color-primary)',
  'hero-parent-page-slash-color': 'var(--color-coral)',
  'hero-parent-page-hover-color': 'var(--color-link-hover)',
  'hero-title-color': 'var(--color-primary)',
  'hero-link-color': 'var(--color-light-blue)',

  // Header Component
  'header-background': 'white',
  'header-link-color': 'var(--color-primary)',
  'header-logo-color': 'var(--color-primary)',
  'header-icon-color': 'var(--color-accent)',
  'header-nested-link-color': 'var(--color-light-blue)',
  'header-nested-link-hover-color': 'var(--color-coral)',
  'header-link-underscore-color': 'var(--color-coral)',
  'header-sub-link-color': 'var(--color-primary)',
  'header-sub-link-hover-color': 'var(--color-coral)',

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

  // Testimonial citation
  'testimonial-name': 'var(--color-coral-dark)',
}

export const coralTheme = {
  // Base Colors
  'color-primary': 'var(--color-blue)',
  'color-accent': 'var(--color-coral)',
  'color-accent-small': 'var(--color-coral-dark)',
  'icon-color': 'var(--color-coral)',
  'badge-text-color': 'white',

  // Hero Component
  'hero-background': 'var(--color-coral)',
  'hero-title-color': 'white',
  'hero-parent-page-color':  'var(--color-primary)',
  'hero-parent-page-slash-color': 'white',
  'hero-parent-page-hover-color': 'white',
  'hero-title-accent-color': 'var(--color-primary)',
  'hero-link-color': 'var(--color-blue)',
  'hero-link-underscore-color': 'var(--color-primary)',

  // Header Component
  'header-background': 'var(--color-coral)',
  'header-link-color': 'var(--color-blue)',
  'header-logo-color': 'white',
  'header-icon-color': 'var(--color-primary)',
  'header-nested-link-color': 'var(--color-primary)',
  'header-nested-link-hover-color': 'var(--color-primary)',
  'header-link-underscore-color': 'var(--color-primary)',
  'header-sub-link-color': 'var(--color-primary)',
  'header-sub-link-hover-color': 'white',

  // Links
  'color-link': 'var(--color-light-blue)',
  'color-link-hover': 'var(--color-light-blue)',
  'color-link-badge': 'white',
  'badge-background-color': 'var(--color-primary)',
  'link-underscore-color': 'var(--color-coral)',
  'link-underscore-hover-color': 'var(--color-green)',
  'read-more-background-color': 'var(--color-coral)',

  // Page section title
  'page-section-title-color': 'var(--color-coral)',

  // Phone number
  'contact-number-color': 'var(--color-coral)',

  // Get in touch numbers
  'get-in-touch-number-color': 'white',

  // Testimonial citation
  'testimonial-name': 'var(--color-coral-dark)',
}

export const darkTheme = {
  // Base colors:
  'color-primary': 'var(--color-blue)',
  'color-accent': 'var(--color-green)',
  'color-accent-small': 'var(--color-blue)',

  // Hero Component
  'hero-background': 'var(--color-primary)',
  'hero-parent-page-color': 'white',
  'hero-parent-page-slash-color': 'var(--color-green)',
  'hero-parent-page-hover-color': 'var(--color-link-hover)',
  'hero-title-color': 'white',
  'hero-link-color': 'white',

  // Header Component
  'header-background': 'var(--color-primary)',
  'header-link-color': 'white',
  'header-logo-color': 'white',
  'header-icon-color': 'var(--color-green)',
  'header-nested-link-color': 'white',
  'header-nested-link-hover-color': 'var(--color-accent)',
  'header-link-underscore-color': 'var(--color-accent)',
  'header-sub-link-color': 'white',
  'header-sub-link-hover-color': 'var(--color-accent)',

  // Links
  'color-link': 'var(--color-primary)',
  'color-link-hover': 'white',
  'color-link-badge': 'var(--color-primary)',

  // Page section title
  'page-section-title-color': 'var(--color-blue)',

  // Phone number
  'contact-phone-number-color': 'var(--color-light-blue)',

  // Get in touch numbers
  'get-in-touch-number-color': 'var(--color-blue)',

  // Testimonial citation
  'testimonial-name': 'var(--color-light-blue)',
}

export const darkThemeTransparent = {
  ...darkTheme,
  'header-background': 'transparent',
}

export const lightThemeTransparent = {
  ...lightTheme,
  'header-background': 'transparent',
}

export const getTheme = theme =>
  ({
    light: lightTheme,
    dark: darkTheme,
    'dark--transparent': darkThemeTransparent,
    'light--transparent': lightThemeTransparent,
    coral: coralTheme,
  }[theme || 'light'])

export default getTheme
