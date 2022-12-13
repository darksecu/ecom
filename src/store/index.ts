import {configureStore} from '@reduxjs/toolkit';
import plpReducer from './slices/plp';
import cartReducer from './slices/cart';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/plp';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    plpReducer: plpReducer,
    cartReducer: cartReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
