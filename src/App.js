import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import MushroomList from './MushroomList.js'
import MushroomForm from './MushroomForm.js'
function App() {
  // Gain access to the dispatch() function
  const dispatch = useDispatch();

  // useSelector is a hook that gives us
  // access tot he redux store
  // store from index.js
  const count = useSelector(store => store.count)

const onIncrease = () => {
  // Make an announcement:
  // "The count shall be increased!!"
  // this will call our reducer functions
  dispatch({
    // The type indicates our intention
    // it can be any string you want,
    // by convention it uses UPPER_SNAKE_CASE
    type: 'INCREASE_COUNT'
  });
  // actions only change state
  // if reducers do something with them.
  // 👇 this will do nothing!!
  dispatch({
    type: 'RELEASE_THE_MONKEYS!'
  });
};

const onDecrease = () => {
  dispatch({
    type: 'DECREASE_COUNT'
  })
};

  return (
    <>
      <MushroomList/>
      <MushroomForm/>

      <h3>Count is: {count}</h3>

      <button onClick={onIncrease}>⬆️</button>
      <button onClick={onDecrease}>⬇️</button>
      </>
  );
}

export default App;
