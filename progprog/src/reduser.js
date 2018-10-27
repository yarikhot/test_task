import {combineReducers} from 'redux';
import HomeReducer from './pages/home/reducer'
import ModalReducer from './component/modal/reduser'


export default combineReducers({
    ...HomeReducer,
    ...ModalReducer
});
