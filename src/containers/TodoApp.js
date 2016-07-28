import React from 'react'
import UUID from 'uuid'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { toggleTodo } from '../actions'

import Todo from '../components/Todo'

class TodoApp extends React.Component {

    render() {
        return (
            <div className="todo__list">
                <h3>Todos</h3>
                <hr/>
                    {this.props.todos.map((todo, index) => {
                        return (
                            <Todo
                                key={todo.id}
                                onClick={() => this.props.toggleTodo(todo)}
                            >
                                {todo.text}
                            </Todo>)
                    })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
