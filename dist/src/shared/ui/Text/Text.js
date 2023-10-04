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
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
export var TextTheme;
(function (TextTheme) {
    TextTheme["PRIMARY"] = "primary";
    TextTheme["ERROR"] = "error";
})(TextTheme || (TextTheme = {}));
export var Text = memo(function (props) {
    var _a;
    var className = props.className, text = props.text, title = props.title, _b = props.theme, theme = _b === void 0 ? TextTheme.PRIMARY : _b;
    return (_jsxs("div", __assign({ className: classNames(cls.Text, (_a = {}, _a[cls[theme]] = true, _a), [className]) }, { children: [title && _jsx("p", __assign({ className: cls.title }, { children: title })), text && _jsx("p", __assign({ className: cls.text }, { children: text }))] })));
});
