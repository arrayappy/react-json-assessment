import React from 'react';
import { Router, Switch, Route } from "react-router-dom";

import StudentForm from "./components/StudentForm";
import History from './components/History';

function App() {
  return (
    <div className="App">
    <Router history={History}>
        <Switch>
            <Route path="/" component={StudentForm} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
