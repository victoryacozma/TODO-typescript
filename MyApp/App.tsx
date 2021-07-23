import React from 'react';
import Navigator from './src/routes/Drawer'
import { Provider } from 'react-redux';
import configureStore from './src/store/ToDoComponent/store';

const store = configureStore();

export default function App() {

  return (
    <Provider store = {store}>
        <Navigator/>
    </Provider>
    
  );
}

