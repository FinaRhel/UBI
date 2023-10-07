import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader, ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading, getProfileReadOnly, getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const isStorybook = __PROJECT__ === 'storybook';
const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);

    useEffect(() => {
        !isStorybook && dispatch(fetchProfileData())
    }, [dispatch]);

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }))
    }, [dispatch]);

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || ''}))
    }, [dispatch]);

    const onChangeCity= useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || ''}))
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch]);

    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }))
    }, [dispatch]);

    const onChangeCountry= useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }))
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((error) => {
                    return (
                        <Text
                            key={error}
                            theme={TextTheme.ERROR}
                            text={error}
                        />
                    )
                })}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
