import React from 'react';
import logo from './logo.svg';
import './App.css';

const ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text: string) {
  return { type: ACTION_TYPES.ADD_TODO, text }
}

export function toggleTodo(index: number) {
  return { type: ACTION_TYPES.TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter: object) {
  return { type: ACTION_TYPES.SET_VISIBILITY_FILTER, filter }
}

const App: React.FC = () => {
  return (
    <div className="App">
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
      </header>
    </div>
  );
}

export default App;
