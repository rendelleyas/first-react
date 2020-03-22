import React from 'react';
import Todos from './components/Todos'

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take you out.',
        completed: false
      },
      {
        id: 2,
        title: 'Take you out shit.',
        completed: false
      },
      {
        id: 3,
        title: 'Take you out shitiest.',
        completed: true
      }
    ]
  }

  markComplete = () => {
    console.log('App js')
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
