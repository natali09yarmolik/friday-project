import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'

const rootReducer = combineReducers({

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;