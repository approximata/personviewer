import React from 'react';
import AddPerson from './containers/AddPerson';
// import AddButton from './prescomponents/Add';
import VisiblePersonInfo from './containers/VisiblePersonInfo';
import AddDump from './containers/AddDump';

const App = () => (
  <div className="app">
    <AddPerson />
    <VisiblePersonInfo />
    <AddDump />
  </div>
);

export default App;
