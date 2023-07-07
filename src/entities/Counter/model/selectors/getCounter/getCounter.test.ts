import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getCounter', () => {
    test('get counter', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        const counter = getCounter(state as StateSchema);
        expect(counter).toEqual({ value: 10 });
    });
});
