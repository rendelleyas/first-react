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
        //other ways to get the (specific) data
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id) 
                //bind->gi package and data arun ma use sa nigammit sa todoitem nga component
                } /> {' '}
                { title }
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

//Proptypes
//declare what type of data is nadawat
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    padding: '5px 9px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
