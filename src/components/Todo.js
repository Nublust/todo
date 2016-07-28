import React, { PropTypes } from 'react'

const Todo = ({onClick, completed, text}) => (
    <div
        onClick={onClick}
        className={"todo__item " + (completed ? 'completed' : "")}>
        <span className="todo__item__text">{text}</span>
    </div>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}


export default Todo