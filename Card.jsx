import React from 'react'

function Card({id, title, handleDelete, handleEdit}) {
  return (
    <div>
        <p> {id} </p>
        <p> {title} </p>
        <button onClick={() => handleDelete(id)}>Eliminar</button>
        <button onClick={() => handleEdit(id)}>Editar</button>
        <hr />
    </div>
  )
}

export default Card