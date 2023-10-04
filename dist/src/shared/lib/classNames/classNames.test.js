import { classNames } from 'shared/lib/classNames/classNames';
describe('classNames', function () {
    test('with only first param', function () {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', function () {
        var expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('with mods', function () {
        var expected = 'someClass mod';
        expect(classNames('someClass', { mod: true })).toBe(expected);
    });
    test('with mods false', function () {
        var expected = 'someClass';
        expect(classNames('someClass', { mod: false })).toBe(expected);
    });
    test('with mods undefined', function () {
        var expected = 'someClass';
        expect(classNames('someClass', { mod: undefined })).toBe(expected);
    });
});
