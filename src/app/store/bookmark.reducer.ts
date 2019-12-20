import {ActionEx, BookmarkActionTypes} from './bookmark.actions';
// import {State, initialState} from './bookmark.state';



export const initialState = [
  {
      name: 'testName',
      url: 'testUrl',
      group: 'hakuna'
    },
  {
    name: 'testName2',
    url: 'testUrl',
    group: 'makaron'
  },
  {
    name: 'testName3',
    url: 'testUrl',
    group: 'walen'
  },
  {
    name: 'testName5',
    url: 'testUrl',
    group: 'visio'
  },
];

export function BookmarkReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case BookmarkActionTypes.Add:
      return [...state, action.payload];
    case BookmarkActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
  //   case BookmarkActionTypes.Add: {
  //     const data = action.payload;
  //     const addData = {
  //       name: data.name,
  //       url: data.url,
  //     };
  //     if (state[data.group]) {
  //       console.log('grupa istnieje');
  //       state[data.group].push(addData);
  //     } else {
  //       console.log('grupa nie istnieje');
  //       state[data.group] = [addData];
  //     }
  //     console.log('status',state);
  //     return state;
  //
  //
  //   }
  //   // case BookmarkActionTypes.Remove:
  //   //   return [
  //   //     ...state.slice(0, action.payload),
  //   //     ...state.slice(action.payload + 1)
  //   //   ];
  //   default:
  //     return state;
  // }
}


