import { createStore } from "redux";
import _reducer from './reducer.js';

const store = createStore(_reducer, {
    videos:'Platzi'
})

export default store;