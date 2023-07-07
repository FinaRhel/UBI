import { fireEvent, screen } from '@testing-library/react';
import { Counter } from 'entities/Counter';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
    test('render', () => {
        componentRender(
            <Counter />,
            { initialState: { counter: { value: 10 } } },
        );
        expect(screen.getByTestId('counter-title')).toHaveTextContent('10');
    });
    test('increment click', () => {
        componentRender(
            <Counter />,
            { initialState: { counter: { value: 10 } } },
        );
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('counter-title')).toHaveTextContent('11');
    });
    test('decrement click', () => {
        componentRender(
            <Counter />,
            { initialState: { counter: { value: 10 } } },
        );
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('counter-title')).toHaveTextContent('9');
    });
});
