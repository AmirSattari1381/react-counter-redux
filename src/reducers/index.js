import {combineReducers} from 'redux';
import { counterReducer } from './countr';
import { loginReducer } from './login';

export const reducers = combineReducers({
    counter: counterReducer,
    login: loginReducer,
})