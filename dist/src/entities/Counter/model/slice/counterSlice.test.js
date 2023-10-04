import { counterReducer, counterActions } from '../slice/counterSlice';
describe('counterSlice', function () {
    test('increment', function () {
        var state = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });
    test('decrement', function () {
        var state = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });
});
