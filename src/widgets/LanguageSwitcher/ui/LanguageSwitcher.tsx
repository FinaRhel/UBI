import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import s from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string,
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const handleToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={handleToggle}
            className={classNames(s.LanguageSwitcher, {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};
