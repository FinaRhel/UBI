import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from '../getCounterValue/getCounterValue';

describe('getCounterValue', () => {
    test('get counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        const counter = getCounterValue(state as StateSchema);
        expect(counter).toEqual(10);
    });
});
