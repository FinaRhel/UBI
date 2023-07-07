import { ReactNode, useMemo } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    portalId?: string;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        portalId,
    } = props;

    const portalElement = useMemo<HTMLElement | null>(
        () => document.getElementById(portalId || 'portal'),
        [portalId],
    );

    if (!portalElement) {
        throw new Error('Portal element not defined');
    }

    return createPortal(children, portalElement);
};
