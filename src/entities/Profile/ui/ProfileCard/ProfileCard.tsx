import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from "entities/Currency";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
    data?: Profile
    className?: string,
    error?: string,
    isLoading?: boolean,
    readonly?: boolean,
    onChangeFirstName?: (value?: string) => void,
    onChangeLastName?: (value?: string) => void,
    onChangeUsername?: (value?: string) => void,
    onChangeCurrency?: (value: Currency) => void,
    onChangeCountry?: (value: Country) => void,
    onChangeAvatar?: (value?: string) => void,
    onChangeCity?: (value?: string) => void,
    onChangeAge?: (value?: string) => void,
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        data,
        error,
        readonly,
        className,
        isLoading,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeLastName,
        onChangeCurrency,
        onChangeCountry,
        onChangeFirstName,
    } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(s.ProfileCard, {}, [className, s.loading])}
            >
                <Loader />
            </div>
        )
    }

    if (isLoading) {
        return (
            <div
                className={classNames(s.ProfileCard, {}, [className, s.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title="Произошла ошибка при загрузке профиля"
                    text="Попробуйте обновить страницу"
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    const mods: Mods = {
        [s.editing]: !readonly,
    }

    return (
        <div className={classNames(s.ProfileCard, mods, [className])}>
            <div>
                {!!data?.avatar && (
                    <div className={s.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder="Ваше имя"
                    className={s.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder="Ваша фамилия"
                    className={s.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder="Ваш возраст"
                    className={s.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder="Город"
                    className={s.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder="Имя пользователя"
                    className={s.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder="Аватар"
                    className={s.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={s.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                />
                <CountrySelect
                    className={s.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                />
            </div>
        </div>
    );
};
