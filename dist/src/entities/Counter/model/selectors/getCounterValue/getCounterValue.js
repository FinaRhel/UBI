import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
export var getCounterValue = createSelector(getCounter, function (_a) {
    var value = _a.value;
    return value;
});
