import React from 'react';
import './App.css';
import Footer from './modules/Footer';
import VisibleTodoList from './modules/VisibleTodoList';
import AddTodo from './modules/AddTodo';

const App: React.FC = () => (
  <div className="App">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
