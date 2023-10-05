import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import s from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src: string;
    alt?: string;
    size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, size, alt }  = props;

    const styles = useMemo<CSSProperties>(() => {
        if (!size) {
            return {};
        }
        return { height: size + 'px', width: size + 'px' }
    }, []);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(s.Avatar, {}, [className])}
        />
    );
});
