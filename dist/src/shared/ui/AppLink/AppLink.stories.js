import { AppLink, AppLinkTheme } from './AppLink';
var meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
    },
};
export default meta;
export var Primary = {
    args: {
        children: 'AppLink',
    },
};
export var Secondary = {
    args: {
        children: 'AppLink',
        theme: AppLinkTheme.SECONDARY,
    },
};
