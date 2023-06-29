import * as React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(s.navbar, {}, [className])}>
        <div className={s.links}>
            <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={s.link}>
                Главная
            </AppLink>
            <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>О нас</AppLink>
        </div>
    </div>

);
