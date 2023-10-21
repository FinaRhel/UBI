import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return object', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {},
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual({});
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
