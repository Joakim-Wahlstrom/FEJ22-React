// export const addTodo = 'ADD_TODO'
import { actiontypes } from "./actiontypes"

export const TodosReducer = (state, action) => {
  switch(action.type) {

    case actiontypes.addTodo:
      return [...state, { id: Date.now().toString(), title: action.payload, completed: false }]

    case actiontypes.deleteTodo:
      return state.filter(todo => todo.id !== action.payload)

    case actiontypes.toggleComplete:
      return [...state]

    default: 
      return state
  }
}