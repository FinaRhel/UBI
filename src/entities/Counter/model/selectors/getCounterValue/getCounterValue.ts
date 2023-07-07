import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    ({ value }) => value,
);
