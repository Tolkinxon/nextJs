import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

let initialState = 0
const reducer = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state += 1;
    case 'DECREMENT':
      return state -= 1
    case 'RANDOM':
      return state * action.payload
  }
}

const store = createStore(reducer)

store.subscribe(()=> {
  console.log(store.getState());
  document.querySelector('#counter').textContent = store.getState()
})


document.querySelector('#counter  ').textContent = store.getState()
document.querySelector('#increment').addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'})
})

document.querySelector('#decrement').addEventListener('click', () => {
  store.dispatch({type: 'DECREMENT'})
})

document.querySelector('#random').addEventListener('click', () => {
  const randomNumber = Math.round(Math.random() * 10)
  store.dispatch({type: 'RANDOM', payload: randomNumber})
})


root.render(
  <React.StrictMode>
  </React.StrictMode>
);


