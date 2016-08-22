import React from 'react';
import AddButton from './prescomponents/Add';
import AddPerson from './containers/AddPerson';
import VisiblePersonInfo from './containers/VisiblePersonInfo';


const App = () => (
  <div className="app">
    <AddButton />
    <AddPerson />
    <VisiblePersonInfo />
  </div>
);

export default App;
