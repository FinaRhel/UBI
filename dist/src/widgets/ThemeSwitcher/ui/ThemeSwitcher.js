var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Button/Button';
import s from './ThemeSwitcher.module.scss';
export var ThemeSwitcher = function (_a) {
    var className = _a.className;
    var _b = useTheme(), theme = _b.theme, toggleTheme = _b.toggleTheme;
    var IconComponent = theme === Theme.DARK ? LightIcon : DarkIcon;
    return (_jsx(Button, __assign({ className: classNames(s.ThemeSwitcher, {}, [className]), onClick: toggleTheme }, { children: _jsx(IconComponent, {}) })));
};
