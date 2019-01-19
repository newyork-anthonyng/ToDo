import React from 'react'
import Footer from '../containers/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import EditableTitle from '../containers/EditableTitle'
import NewTodoList from '../containers/NewTodoList'
import CompletedTodoList from '../containers/CompletedTodoList'

const App = () => (
  <div>
    <h1>Listicles</h1>
    <EditableTitle />
    <AddTodo />
    <NewTodoList />
    <VisibleTodoList />
    <Footer />
    <CompletedTodoList />
  </div>
)

export default App
