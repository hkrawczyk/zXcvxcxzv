import {ActionEx, BookmarkActionTypes} from './bookmark.actions';
import {State, initialState} from './bookmark.state';

export function BookmarkReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case BookmarkActionTypes.Add: {
      const data = action.payload;
      const addData = {
        name: data.name,
        url: data.url,
      };
      if (state[data.group]) {
        console.log('grupa istnieje');
        state[data.group].push(addData);
      } else {
        console.log('grupa nie istnieje');
        state[data.group] = [addData];
      }
      console.log('status',state);
      return state;


    }
    // case BookmarkActionTypes.Remove:
    //   return [
    //     ...state.slice(0, action.payload),
    //     ...state.slice(action.payload + 1)
    //   ];
    default:
      return state;
  }
}

import { createSelector } from '@ngrx/store';
export interface FeatureState {
  counter: number;
}
export const selectFeature = (state: State) => state.state;

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.counter
);
