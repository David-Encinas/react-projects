import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else {
    return []
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show: false, msg:'', type:''});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) { showAlert(true,'please enter value', 'danger') }
    else if (name && isEditing) { 
      setList(list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name}
        }
        return item
      }))
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, `updated! ${name}`,'success')
     }
    else {
      showAlert(true, `${name} has been added to list`, 'success')
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      setName('')
    }
  }

  const showAlert = (show = false, msg='', type='') => {
    setAlert({show,type,msg})
  }

  const clearList = () => {
    showAlert(true, 'list has been cleared', 'danger');
    setList([])
  }

  const removeItem = (id, title) => {
    showAlert(true, `${title} has been removed`, 'danger');
    setList(list.filter((item)=> item.id !== id))
  }

  const editItem = (id, title) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title)
    showAlert(true, `editing ${title}`, 'danger');
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])

  return (
    <section className="section-center">
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className='grocery' placeholder='e.g. eggs' value={name} onChange={(e) => setName(e.target.value)} />
          <button className="submit-btn" type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
      <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <button className="clear-btn" onClick={clearList}>clear items</button>
      </div>
      )}
    </section>
  )
}

export default App
