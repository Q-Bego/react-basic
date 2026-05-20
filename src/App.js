import './App.css'
import { useState } from 'react'
//组件的状态更新
const App = () => {
  //状态更新需要usestate函数
  const [count, setCount] = useState(10)
  return (
    <div>
      <h1>计数器:{count}</h1>
      {/* 不要用setCount(count+=1)，直接用count+1,不要修改count,会导致渲染报错 */}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default App
