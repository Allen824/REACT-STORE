import {combineReducers} from 'redux';
import {countReducer, initialReducer, moneyReducer} from './productReducer';

const reducer = combineReducers({
    fruits: countReducer,
    money: moneyReducer,
    initialBalance: initialReducer
})

export default reducer;
