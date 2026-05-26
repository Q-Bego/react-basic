//父子之间的通信
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import './App9.scss'
import axios from 'axios'

//子到父的通讯需要父组件提供一个修改状态的函数，并传递给子组件
//子组件调用数据并回传函数
const Todo = ({ id, text, done, onToggle, onDelete }) => {
  return (
    <div className={classNames('todo', done && 'todo-done')}>
      <div onClick={() => onToggle(id, !done)}>{text}</div>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  )
}

//列表数据
const defaultTodos = []
const App = () => {
  const [todos, setList] = useState(defaultTodos)
  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get('http://localhost:8000/todos')
      setList(res.data)
    }
    loadData()
  }, [])
  const onToggle = async (id, done) => {
    console.log(id)
    setList(
      todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item
        }
      })
    )
    await axios.patch(`http://localhost:8000/todos/${id}`, { done })
  }
  const onDelete = id => {
    return setList(defaultTodos.filter(item => item.id !== id))
  }
  return (
    <div className='app'>
      <h3>待办任务列表:</h3>
      {todos.map(item => {
        // return (
        //   <Todo
        //     key={item.id}
        //     id={item.id}
        //     text={item.text}
        //     done={item.done}
        //     onToggle={onToggle}
        //   ></Todo>
        // )
        return (
          <Todo
            key={item.id}
            {...item}
            onToggle={onToggle}
            onDelete={onDelete}
          ></Todo>
        )
      })}
    </div>
  )
}

export default App
