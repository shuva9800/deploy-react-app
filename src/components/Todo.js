import React from 'react'

export default function Todo({todos}) {
  return (
    <div>
     <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
    </div>
  )
}
