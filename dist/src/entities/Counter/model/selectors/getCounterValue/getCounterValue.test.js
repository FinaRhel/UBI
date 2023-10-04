import { getCounterValue } from '../getCounterValue/getCounterValue';
describe('getCounterValue', function () {
    test('get counter value', function () {
        var state = {
            counter: {
                value: 10,
            },
        };
        var counter = getCounterValue(state);
        expect(counter).toEqual(10);
    });
});
