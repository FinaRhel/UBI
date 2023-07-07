import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode,
    initialStore?: DeepPartial<StateSchema>,
}

export const StoreProvider = ({ children, initialStore }: StoreProviderProps) => {
    const store = createReduxStore(initialStore as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
