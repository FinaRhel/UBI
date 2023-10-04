import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
export var routerDecorator = function (StoryComponent) { return (_jsx(BrowserRouter, { children: _jsx(StoryComponent, {}) })); };
