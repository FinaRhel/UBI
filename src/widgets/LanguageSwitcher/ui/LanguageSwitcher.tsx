import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
    className?: string,
    short?: boolean,
}

export const LanguageSwitcher = ({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const handleToggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={handleToggle}
            className={classNames('', {}, [className])}
        >
            {short ? t('Язык сокращение') : t('Язык')}
        </Button>
    );
};
