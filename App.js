import React, { useReducer, useEffect } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import Navigation from './src/navigation/Navigation';


import AppContext from './src/peregrine/store/context/appContext';
import { StatusBar } from 'react-native';
function reducer(state, action, dispatch) {
  switch (action.type) {
    case 'SET_USER':
      state.user = action.data;
      return {
        // user: action.data,
        ...state,
      };
    case 'SIGN_OUT':
      state.user = null;
      return { ...state };
    default:
      throw new Error();
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, { user: null });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <>
        <StatusBar animated={true} backgroundColor='white' />
        {state.user ? <Navigation /> : <LoginScreen />}
      </>
    </AppContext.Provider>
  );
}
