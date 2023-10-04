import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
describe('getCounter', function () {
    test('get counter', function () {
        var state = {
            counter: {
                value: 10,
            },
        };
        var counter = getCounter(state);
        expect(counter).toEqual({ value: 10 });
    });
});
