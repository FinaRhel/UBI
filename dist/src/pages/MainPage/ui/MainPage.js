import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
var MainPage = function (props) {
    var t = useTranslation().t;
    return (_jsxs("div", { children: [t('Главная'), _jsx(Counter, {})] }));
};
export default MainPage;
