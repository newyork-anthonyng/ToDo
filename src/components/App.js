import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import EditableTitle from '../containers/EditableTitle'
import NewTodoList from '../containers/NewTodoList'

const App = () => (
  <div>
    <h1>Listicles</h1>
    <EditableTitle />
    <AddTodo />
    <NewTodoList />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
