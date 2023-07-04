import {classNames} from "./classNames";

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass mod'
        expect(classNames('someClass', {mod: true}, )).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass'
        expect(classNames('someClass', {mod: false}, )).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass'
        expect(classNames('someClass', {mod: undefined}, )).toBe(expected);
    });
})