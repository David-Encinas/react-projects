import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({items, removeItem, editItem}) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const {id, title} = item;
        return <article key={id} className='grocery-item'>
          <p className="title">{title}</p>
          <div className="btn-container">
            <button className="edit-btn" type='button' onClick={() => editItem(id, title)}>
              <FaEdit />
            </button>
            <button className="delete-btn" type='button' onClick={() => removeItem(id, title)}>
              <FaTrash />
            </button>
          </div>
        </article>
      })}
    </div>
  )
}

export default List
