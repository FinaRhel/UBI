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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import s from './Sidebar.module.scss';
export var Sidebar = function (_a) {
    var _b;
    var className = _a.className;
    var _c = useState(false), collapsed = _c[0], setCollapsed = _c[1];
    var onToggle = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    return (_jsxs("div", __assign({ "data-testid": "sidebar", className: classNames(s.Sidebar, (_b = {}, _b[s.collapsed] = collapsed, _b), [className]) }, { children: [_jsx(Button, __assign({ "data-testid": "sidebar-toggle", onClick: onToggle, className: s.collapseBtn, theme: ButtonTheme.BACKGROUND_INVERTED, size: ButtonSize.L, square: true }, { children: collapsed ? '>' : '<' })), _jsx("div", __assign({ className: s.items }, { children: SidebarItemsList.map(function (item) { return (_jsx(SidebarItem, { collapsed: collapsed, item: item }, item.path)); }) })), _jsxs("div", __assign({ className: s.switchers }, { children: [_jsx(ThemeSwitcher, {}), _jsx(LanguageSwitcher, { short: collapsed, className: s.lang })] }))] })));
};
