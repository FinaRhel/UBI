import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import s from './PageError.module.scss';

interface PageErrorProps {
    className?: string,
}

export const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(s.PageError, {}, [className])}>
            <p>Произошла непредвиденная ошибка</p>
            <Button onClick={reloadPage}>
                Обновить страницу
            </Button>
        </div>
    );
};
