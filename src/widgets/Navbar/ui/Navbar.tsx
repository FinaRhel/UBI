import * as React from 'react';
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import s from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={s.links}>
                <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={s.link}>Главная</AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>О нас</AppLink>
            </div>
        </div>

    );
};

