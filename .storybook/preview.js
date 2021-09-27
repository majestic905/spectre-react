import '@storybook/addon-console';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import { addDecorator } from '@storybook/react';

setConsoleOptions({ panelExclude: [] });
addDecorator((storyFn, context) => withConsole()(storyFn)(context));


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}