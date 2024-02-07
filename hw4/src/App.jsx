import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import FormComponent from './components/FormComponent';
import DisplayComponent from './components/DisplayComponent';
import { addUser } from './components/userReducer.js'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>User Data Management</h1>
        <FormComponent onSubmit={userData => store.dispatch(addUser(userData))} />
        <DisplayComponent />
      </div>
    </Provider>
  )
}

export default App;
