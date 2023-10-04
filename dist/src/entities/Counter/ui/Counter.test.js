import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { Counter } from 'entities/Counter';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
describe('Counter', function () {
    test('render', function () {
        componentRender(_jsx(Counter, {}), { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('counter-title')).toHaveTextContent('10');
    });
    test('increment click', function () {
        componentRender(_jsx(Counter, {}), { initialState: { counter: { value: 10 } } });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('counter-title')).toHaveTextContent('11');
    });
    test('decrement click', function () {
        componentRender(_jsx(Counter, {}), { initialState: { counter: { value: 10 } } });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('counter-title')).toHaveTextContent('9');
    });
});
