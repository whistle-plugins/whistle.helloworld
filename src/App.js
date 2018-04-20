import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import './app.css';

const App = () => {
  return (
    <List />
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
