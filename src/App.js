import React from 'react';
import AddPerson from './containers/AddPerson';
import VisiblePersonInfo from './containers/VisiblePersonInfo';


const App = () => (
  <div className="app">
    <AddPerson />
    <VisiblePersonInfo />
  </div>
);

export default App;
