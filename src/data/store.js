import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import productSlice from "./productSlice"
import userSlice from "./userSlice"
// Persist configuration
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}
// Persisted reducers
const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer)

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productSlice.reducer,
        user: persistedUserReducer,
        middleware: [thunk]
    }
})
// Enhanced store
export const persistor = persistStore(store)
