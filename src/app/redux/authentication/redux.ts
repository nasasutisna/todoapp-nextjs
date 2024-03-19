import { legacy_createStore } from "@reduxjs/toolkit";

export enum CounterAction {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

export interface ICounterState {
  value: number
}

export interface IAction {
  type: CounterAction;
  payload: ICounterState;
}

function counterReducer(state: ICounterState = { value: 0 }, action: IAction) {
  switch (action.type) {
    case CounterAction.INCREMENT:
      return { value: state.value - 1 }
    case CounterAction.DECREMENT:
      return { value: state.value + 1 }
    default:
      return state;
  }
}

const store = legacy_createStore(counterReducer);

store.subscribe(() => {
  console.log('store change', store.getState());
});

const action1: IAction = { type: CounterAction.DECREMENT, payload: { value: 1 } }
store.dispatch(action1);