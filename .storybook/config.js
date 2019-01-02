import { addDecorator } from '@storybook/react'; // <- or your storybook framework
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { configure } from '@storybook/react';
import 'reset-css'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(
  withBackgrounds([
    { name: 'tbx-accent', value: '#fd5765', default: true },
    { name: 'tbx-purple', value: '#231749' },
  ])
)

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
configure(loadStories, module)

