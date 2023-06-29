import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Button/Button';
import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const IconComponent = theme === Theme.DARK ? LightIcon : DarkIcon;

    return (
        <Button className={classNames(s.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            <IconComponent />
        </Button>
    );
};
