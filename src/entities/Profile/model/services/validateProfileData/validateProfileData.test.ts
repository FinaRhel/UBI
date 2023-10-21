import { validateProfileData } from './validateProfileData';
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {ValidateProfileError} from "entities/Profile/model/types/profile";

const data = {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
    lastname: 'Rhel',
    first: 'Name',
    city: 'Msk',
    currency: Currency.RUB,
};


describe('validateProfileData.test', () => {
    test('valid data', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and lastName', async () => {
        const result = validateProfileData({...data, first: '', lastname: ''});

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('without profile', async () => {
        const result = validateProfileData();

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });
});
