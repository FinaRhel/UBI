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
import { Button } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
export var Counter = function (_a) {
    var className = _a.className;
    var dispatch = useDispatch();
    var value = useSelector(getCounterValue);
    var handleIncrement = useCallback(function () {
        dispatch(counterActions.increment());
    }, [dispatch]);
    var handleDecrement = useCallback(function () {
        dispatch(counterActions.decrement());
    }, [dispatch]);
    return (_jsxs("div", { children: [_jsx("h1", __assign({ "data-testid": "counter-title" }, { children: value })), _jsx(Button, __assign({ onClick: handleIncrement, "data-testid": "increment-btn" }, { children: "Increment" })), _jsx(Button, __assign({ onClick: handleDecrement, "data-testid": "decrement-btn" }, { children: "Decrement" }))] }));
};
