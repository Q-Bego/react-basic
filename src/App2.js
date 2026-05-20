import './App.css'
import { useState } from 'react'
const App = () => {
  const [count, setCount] = useState(0)
  const [list, setList] = useState(['苹果', '香蕉'])
  const [user, setUser] = useState({ name: '黑马', age: 18 })
  return (
    <div>
      <h3>简单类型:（数值）</h3>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>修改</button>
      <hr></hr>
      <h3>数组：</h3>
      <div>{list.join(',')}</div>
      <button
        onClick={() => {
          setList([...list, ['琳琳']])
        }}
      >
        添加
      </button>
      <button
        onClick={() => {
          setList(list.filter(item => item !== '苹果'))
        }}
      >
        删除
      </button>
      <button
        onClick={() => {
          setList(
            list.map(item => {
              //这里的问题在于list只拿到了现在的，没有拿到新增之后的
              if (item === '苹果') {
                return 'Apple'
              }
              return item
            })
          )
        }}
      >
        修改
      </button>
      <hr></hr>
      <h3>对象：</h3>
      <div>
        姓名：{user.name},年龄：{user.age}
      </div>
      <button
        onClick={() => {
          setUser({ ...user, name: '传智' })
        }}
      >
        修改
      </button>
      <hr></hr>
    </div>
  )
}

export default App
