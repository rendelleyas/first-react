import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import About from './components/pages/About'
import { v4 as uuidv4 } from 'uuid'

import './App.css';

class App extends React.Component {

  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take you out.',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Take you out shit.',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Take you out shitiest.',
        completed: true
      }
    ]
  }
  
  markComplete = (id) => {
    //state ang gamit kay naa man sa app.js  -> naa sa babaw
    // gi map sya una, if ang id nga na click is naa, lahiun niya ang value to opposite
    this.setState({
      todos: this.state.todos.map( todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  // dete specific data
  // ... ->psabot tanan data
  // feilter - > walaun ang kani nga id 
  delTodo = (id) => {
    this.setState({
      //... use to copy ang current value sa array
      todos: [...this.state.todos.filter(todo=>todo.id !== id )]
    });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      // title: title, - > pwede pd
      title, 
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  render() {
      //this.state.todos -> way to declare nga maka access sila sa data 
    return (
      <Router>
        <div className="App">
        <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
              <Route path='/about' component={About}/>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
