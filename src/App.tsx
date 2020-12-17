import React from 'react';
import logo from './logo.svg';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider'
import './App.css';

import sync from './db/sync'
import List from './front/List';
import { database } from './db/connectDb';

const App: React.FC = () => {

  React.useEffect(() => {
    (async () => {
      await sync()
    })()
  }, []);

  return (
    <div className="App">
      <DatabaseProvider database={database}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <div style={{ display: 'flex' }}>
            <List />
            <List />
          </div>
        </header>
      </DatabaseProvider>
    </div>
  );
}

export default App;
