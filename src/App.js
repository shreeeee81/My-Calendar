import './App.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import React from 'react';
import ButtonAppBar from './AppBar';

class App extends React.Component {
  render() {
    return (
      <div>
      <ButtonAppBar />
    <ScheduleComponent>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
    </div>
)}
}

export default App;
