import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "./todosSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"

const todosPersistConfig = {
  key: 'todos',
  storage
}

const persistedTodosReducer = persistReducer(todosPersistConfig, todosReducer)

export const store = configureStore({
  reducer: {
    todos: persistedTodosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

