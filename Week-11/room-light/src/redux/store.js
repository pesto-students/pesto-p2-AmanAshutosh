import {createStore} from 'redux';
import { toggleReducer } from './Room/reducer';

// Creating store with redux
export const store = createStore(toggleReducer)
