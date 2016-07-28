import { combineReducers } from 'redux'
import UUID from 'uuid'

import {VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO} from '../actions'
const { SHOW_ALL } = VisibilityFilters


const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [
        {
            "id": "eef89d71-6562-4393-bd95-0ed6d8c3bb59",
            "text": "todo 1",
            "completed": false
        },
        {
            "id": "e203ef0f-8fe7-4dc1-a8a3-137a44ba3777",
            "text": "todo 2",
            "completed": true
        },
        {
            "id": "49119010-ac77-4023-a366-759b121a99fb",
            "text": "todo 3",
            "completed": false
        },
        {
            "id": "19db396a-341b-4b7a-b743-90f94ed777c3",
            "text": "todo 4",
            "completed": false
        }
    ]
}

function todos(state = initialState.todos, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: UUID.v4(),
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp
