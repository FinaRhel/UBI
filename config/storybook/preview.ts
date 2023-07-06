import type { Preview } from '@storybook/react';
import { styleDecorator } from '../../src/shared/config/storybook/styleDecorator/styleDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator/routerDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        themes: {
            default: Theme.LIGHT,
            list: [
                { name: Theme.LIGHT, class: Theme.LIGHT },
                { name: Theme.DARK, class: Theme.DARK },
            ],
        },
    },
    decorators: [styleDecorator, routerDecorator],
};

export default preview;
