import { classNames } from "shared/lib/classNames/classNames";
import s from './Sidebar.module.scss';
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import * as React from "react";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";

interface SidebarProps {
    className?: string,
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(s.Sidebar, {[s.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>Toggle</button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={s.lang} />
            </div>
        </div>
    );
};
