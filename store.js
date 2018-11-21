import { createStore } from 'redux';
import reducer from "./reducers/videos"
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persisConfig = {
   key: 'root',
   storage,
   blacklist: ['selectedMovie']
};

const pReducer = persistReducer(persisConfig, reducer);
export const store = createStore(pReducer);
export const persistor = persistStore(store);