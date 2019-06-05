import {createStore } from 'redux'
import todos from './reducer'


const store = createStore(todos)



export default store