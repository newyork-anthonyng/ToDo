import React from 'react'
import Footer from '../containers/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import EditableTitle from '../containers/EditableTitle'
import NewTodoList from '../containers/NewTodoList'
import CompletedTodoList from '../containers/CompletedTodoList'
import { headerStyle, titleStyle, mainStyle } from '../styles'

const App = () => (
  <div>
    <div style={headerStyle}>
      <h1 style={titleStyle}>Listicles</h1>
      <EditableTitle />
      <AddTodo />
    </div>

    <div style={mainStyle}>
      <NewTodoList />
      <VisibleTodoList />
      <Footer />
      <CompletedTodoList />
    </div>
  </div>
)

export default App
