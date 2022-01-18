import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import logger from 'redux-logger';


// reducer!
// This will replace
//    const [count, setCount] = useState(5);
const count = (state = 5, action) => {

  // if (action.type === 'INCREASE_COUNT') {
  //   return state + 1;
  // } 
  // else if (action.type === 'DECREASE_COUNT') {
  //   return state -1;
  // }
  
  // same as above 👆
  switch (action.type) {
    case 'INCREASE_COUNT':
      return state + 1;
    case 'DECREASE_COUNT':
      return state - 1;
  }
  // Whatever we return from the reducer
  // is the value of our state

  return state;
}; // end of count

const mushrooms = (state = ['Oyster', 'Enoki'], action) => {
  switch(action.type) {
    case 'ADD_MUSHROOM':
      return [...state, action.payload];
  }
  return state;
};



// Create the redux store
// aka "global state"
const store = createStore(
  // CombineReducer get an object {} as an argument 
  // is the "shape" of our store
  // store === { count: 5 }
  combineReducers({
    count: count,
    mushrooms: mushrooms
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <React.StrictMode>
    {/** Give our React app access to the redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
