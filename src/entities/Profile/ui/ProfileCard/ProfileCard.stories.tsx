import React from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {ProfileCard} from "entities/Profile";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import avatar from 'shared/assets/tests/img.png';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Armenia,
            lastname: 'Rhel',
            first: 'Name',
            city: 'Msk',
            currency: Currency.RUB,
            avatar,
        }
    },
};
export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {};

export const Loading: Story = {
    args: {
        isLoading: true,
    }
};

export const Error: Story = {
    args: {
        error: 'true',
    }
};
