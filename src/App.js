import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routes'

import 'antd/dist/antd.css'

import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard>
          <BaseRouter />
        </Dashboard>
      </Router>
    </div>
  );
}

export default App;
