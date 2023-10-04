import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import {
    getProfileIsLoading
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { useSelector } from 'react-redux';
import { classNames } from "shared/lib/classNames/classNames";
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string,
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(s.ProfileCard, {}, [className])}>
            <div className={s.header}>
                <Text title="Профиль" />
                <Button theme={ButtonTheme.OUTLINE} className={s.editBtn}>
                    Редактировать
                </Button>
            </div>
            <div className={s.data}>
                <Input
                    value={data?.first}
                    placeholder="Ваше имя"
                    className={s.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder="Ваша фамилия"
                    className={s.input}
                />
            </div>
        </div>
    );
};
