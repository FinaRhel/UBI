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
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
export var TranslationDecorator = function (StoryComponent) { return (_jsx(I18nextProvider, __assign({ i18n: i18n }, { children: _jsx(Suspense, __assign({ fallback: "" }, { children: _jsx(StoryComponent, {}) })) }))); };
