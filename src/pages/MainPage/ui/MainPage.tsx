import * as React from 'react';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

type Props = {

};

const MainPage = (props: Props) => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Главная')}
            <Counter />
        </div>
    );
};

export default MainPage;
