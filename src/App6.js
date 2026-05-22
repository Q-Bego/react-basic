import { useRef } from 'react'
//使用dom操作获取元素
const App = () => {
  const inputRef = useRef(null)
  return (
    <div>
      <input ref={inputRef}></input>
      <hr></hr>
      <button onClick={() => console.log(inputRef.current.value)}>
        获取文本框的值
      </button>
      <button onClick={() => inputRef.current.focus()}>获得焦点</button>
    </div>
  )
}

export default App
