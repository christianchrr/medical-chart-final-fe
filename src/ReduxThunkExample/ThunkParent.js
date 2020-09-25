import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './thunkReducer';
import ThunkChild from './ThunkChild'

  const store = createStore(rootReducer, applyMiddleware(thunk));

  const ThunkParent = () => {
    return (
      <Provider store={store} >
        <ThunkChild />
      </Provider>
    )
  }

  export default ThunkParent


