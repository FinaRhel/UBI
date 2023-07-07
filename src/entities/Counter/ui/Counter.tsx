import { Button } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string,
}

export const Counter = ({ className }: CounterProps) => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const handleIncrement = useCallback(() => {
        dispatch(counterActions.increment());
    }, [dispatch]);

    const handleDecrement = useCallback(() => {
        dispatch(counterActions.decrement());
    }, [dispatch]);

    return (
        <div>
            <h1 data-testid="counter-title">{value}</h1>
            <Button onClick={handleIncrement} data-testid="increment-btn">
                Increment
            </Button>
            <Button onClick={handleDecrement} data-testid="decrement-btn">
                Decrement
            </Button>
        </div>
    );
};
