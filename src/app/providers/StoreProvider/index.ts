import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type { StateSchema, ThunkExtraArg, ThunkConfig } from './config/StateSchema';

export {
    AppDispatch,
    StateSchema,
    StoreProvider,
    createReduxStore,
    ThunkExtraArg,
    ThunkConfig,
};
