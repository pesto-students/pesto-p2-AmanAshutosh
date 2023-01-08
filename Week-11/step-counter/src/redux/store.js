import { createStore } from 'redux'
import stepOperator from './steps/Reducer'

// creating and exporting redux store
const store = createStore(stepOperator)

export default store