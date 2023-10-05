import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import s from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string,
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadOnly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(s.ProfilePageHeader, {}, [className])}>
            <Text title="Профиль" />
            {readonly ? (
                <Button theme={ButtonTheme.OUTLINE} className={s.editBtn} onClick={onEdit}>
                    Редактировать
                </Button>
            ) : (
               <>
                   <Button theme={ButtonTheme.OUTLINE_RED} className={s.editBtn} onClick={onCancelEdit}>
                       Отменить
                   </Button>
                   <Button theme={ButtonTheme.OUTLINE} className={s.saveBtn} onClick={onSave}>
                       Сохранить
                   </Button>
               </>
            )}
        </div>
    );
};
