import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none' 
        }
    }

    //this.props.markComplete -> kay adto/gipasa sa todos.js na location 
    render() {
        return (
            <div style={this.getStyle()}>
            
                <input type="checkbox" onChange={this.props.markComplete} /> {' '}
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

//Proptypes
//declare what type of data is nadawat
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default TodoItem
