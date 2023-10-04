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
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { useSelector } from 'react-redux';
import { classNames } from "shared/lib/classNames/classNames";
import s from './ProfileCard.module.scss';
export var ProfileCard = function (_a) {
    var className = _a.className;
    var data = useSelector(getProfileData);
    var error = useSelector(getProfileError);
    var isLoading = useSelector(getProfileIsLoading);
    return (_jsxs("div", __assign({ className: classNames(s.ProfileCard, {}, [className]) }, { children: [_jsxs("div", __assign({ className: s.header }, { children: [_jsx(Text, { title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C" }), _jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, className: s.editBtn }, { children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C" }))] })), _jsxs("div", __assign({ className: s.data }, { children: [_jsx(Input, { value: data === null || data === void 0 ? void 0 : data.first, placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F", className: s.input }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.lastname, placeholder: "\u0412\u0430\u0448\u0430 \u0444\u0430\u043C\u0438\u043B\u0438\u044F", className: s.input })] }))] })));
};
