import { createStore } from "redux";

function counterReducer(state = { value: 1 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value - 1 }
    case 'DECREMENT':
      return { value: state.value + 1 }
    default:
      return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log('store change', store.getState());
});

const action1 = { type: 'DECREMENT' }
store.dispatch(action1);

const action3= { type: 'DECREMENT' }
store.dispatch(action3);