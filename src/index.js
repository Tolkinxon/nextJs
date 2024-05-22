import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux'
import { reducer } from './redux/reducer';
import  * as actions  from './redux/actions';


const store = createStore(reducer)
const { dispatch, getState, subscribe} = store

subscribe(()=> {
  document.querySelector('#counter').textContent = getState().value
})



const { incr, decr, random } = bindActionCreators(actions, dispatch)

// const actionCreators = (actions, dispatch) => (...args) => {
//   dispatch(actions(...args))
// }

// const handleIncr =  actionCreators(incr, dispatch)
// const handleDecr = actionCreators(decr, dispatch)
// const handleRandom = actionCreators(random, dispatch)



document.querySelector('#increment').addEventListener('click', () => {
  incr()
})

document.querySelector('#decrement').addEventListener('click', () => {
  decr()
})

document.querySelector('#random').addEventListener('click', () => {
  const randomNumber = Math.round(Math.random() * 10)
  random(randomNumber)
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);


