import { useMemo } from 'react';
import { createPortal } from 'react-dom';
export var Portal = function (props) {
    var children = props.children, portalId = props.portalId;
    var portalElement = useMemo(function () { return document.getElementById(portalId || 'portal'); }, [portalId]);
    if (!portalElement) {
        throw new Error('Portal element not defined');
    }
    return createPortal(children, portalElement);
};
