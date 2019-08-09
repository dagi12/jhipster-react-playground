import React from 'react';
import './App.css';
import Footer from './Footer';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';

const App: React.FC = () => (
  <div className="App">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
