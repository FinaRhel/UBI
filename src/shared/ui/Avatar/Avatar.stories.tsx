import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import avatarImg from './img.png'

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    args: {
        src: avatarImg,
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
