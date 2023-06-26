import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddItem()
    }
  }

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      const newItem = {
        id: Date.now(),
        content: inputValue
      }
      setList([...list, newItem])
      setInputValue('')
    } else {
      alert('앗 할 일이 비어있어!')
    }
  }

  const handleDeleteItem = (itemId) => {
    const updatedList = list.filter(item => item.id !== itemId)
    setList(updatedList)
  }

  return (
    <>
      <div className='container'>
        <div>
          <input type='text' placeholder='To do...' value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
          <button onClick={handleAddItem}>추가</button>
        </div>
        <ul className='list'>
          {
            list.map(post => (
              <li key={post.id}>
                {post.content}
                <button className='delete-button' onClick={() => handleDeleteItem(post.id)}>삭제</button>
              </li>
            ))
          } 
        </ul>
      </div>
    </>
  )
}

export default App
